import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { webUrlState } from "../../recoil/Recoil";
import styled from "styled-components";
import { AiOutlineCamera, AiOutlineCloseCircle } from "react-icons/ai";

import "./styles/NewFeedView.scss";

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

export const ModalView = styled.div.attrs((props) => ({
    role: "dialog",
}))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;

    width: 90vw;
    height: 90vh;
    padding: 20px 0;
    border-radius: 3px;
    position: relative;

    overflow-x: hidden;
    overflow-y: scroll;
`;

export const ModalList = styled.div`
    display: flex;
    align-items: center;

    font-size: 20px;

    padding-left: 40px;

    width: 100%;
    height: 40px;
    margin: auto;

    &:hover {
        cursor: pointer;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    width: 100px;
    height: 100px;
`;

export const AddImageBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    width: 80px;
    height: 80px;
    font-size: 20px;

    box-shadow: 1px 4px 6px 1px rgba(0, 0, 0, 0.4);

    &:hover {
        cursor: pointer;
    }
`;

export const ItemImage = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;
    font-size: 20px;

    box-shadow: 1px 4px 6px 1px rgba(0, 0, 0, 0.4);
`;

const NewFeedView = () => {
    const url = useRecoilValue(webUrlState);
    const access_token = localStorage.getItem("access_token");
    const headers = {
        Authorization: `Bearer ${access_token}`,
    };
    const navigate = useNavigate();

    const [imageArr, setImageArr] = useState([]); // 이미지 배열
    const [isOpen, setIsOpen] = useState(false); // 카테고리 모달 상태
    const [categoryArr, setCategoryArr] = useState([]); //카테고리 정보 저장 배열

    const imageInput = useRef(); //이미지 삽입 참조

    const [itemInfo, setItemInfo] = useState({
        title: "",
        category: "",
        text: "",
        price: "",
    });

    const openModalHandler = (event) => {
        setIsOpen(!isOpen);
    };

    const addImage = () => {
        //파일 추가 버튼 클릭 이벤트
        imageInput.current.click();
    };

    const handleChange = (e) => {
        const file = imageInput.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageArr([reader.result, ...imageArr]);
        };
    };

    const deleteImage = (e) => {
        const src = e.target.getAttribute("src");
        setImageArr(imageArr.filter((imgSrc) => imgSrc !== src));
    };

    //카테고리 로딩
    const categoryListAxios = () =>
        axios
            .get(url + "api/item/category", {
                headers: headers,
            })
            .then((res) => setCategoryArr(res.data.data, ...categoryArr))
            .catch((err) => {
                alert("예기치못한 에러가 발생했습니다.");
                console.log(err);
            });

    const newItemtAxios = () => {
        const frm = new FormData(); //폼데이터 기록 변수

        frm.append("title", itemInfo.title);
        frm.append("category", itemInfo.category);
        frm.append("text", itemInfo.text);
        frm.append("files", imageInput.current.files[0]);
        frm.append("price", itemInfo.price);
        axios
            .post(url + "api/item", frm, {
                headers: headers,
            })
            .then((res) => {
                alert(itemInfo.title + "등록이 완료되었습니다.");
                navigate("/home");
            })
            .catch((err) => {
                alert("예기치못한 에러가 발생했습니다.");
                console.log(err);
            });
    };

    useEffect(() => {
        //카테고리 로딩 실행
        console.log("카테고리 리스트 호출");
        categoryListAxios();
    }, []);

    return (
        <div className="newfeed-container">
            {/* 이거 상위탭에 넣을지?? */}
            <button
                type="submit"
                className="newfeed-submit-btn"
                onClick={() => {
                    newItemtAxios();
                    //서버로 보내는 함수 넣기
                }}
            >
                완료
            </button>
            <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={imageInput}
                onChange={handleChange}
            />

            <ModalContainer>
                {isOpen ? (
                    <ModalBackdrop onClick={openModalHandler}>
                        <ModalView
                            onClick={(event) => {
                                //모달창을 누를때 꺼지지않게 함
                                event.stopPropagation();
                            }}
                        >
                            {categoryArr.map((el, index) => (
                                <ModalList
                                    onClick={() => {
                                        //카테고리 설정 후 모달 닫기
                                        setItemInfo({
                                            ...itemInfo,
                                            category: el,
                                        });
                                        openModalHandler();
                                    }}
                                >
                                    {el}
                                </ModalList>
                            ))}
                        </ModalView>
                    </ModalBackdrop>
                ) : null}
            </ModalContainer>

            <div className="newfeed-list newfeed-img">
                <ImageContainer>
                    <AddImageBtn onClick={addImage}>
                        <AiOutlineCamera size="40px" />
                        <span>
                            <span>{imageArr.length}</span> / 10
                        </span>
                    </AddImageBtn>
                </ImageContainer>

                {imageArr.map((el, index) => (
                    <ImageContainer key={index}>
                        <ItemImage src={el}></ItemImage>
                        <AiOutlineCloseCircle
                            className="img-delete-btn"
                            src={el}
                            onClick={deleteImage}
                            // 여기 삭제 추가 버튼 인덱스 생각해야함
                        />
                    </ImageContainer>
                ))}
            </div>

            <input
                className="newfeed-list"
                value={itemInfo.title}
                onChange={(e) =>
                    setItemInfo({ ...itemInfo, title: e.target.value })
                }
                type="text"
                placeholder="제목"
            />

            <button
                type="button"
                value={itemInfo.category}
                onChange={(e) =>
                    setItemInfo({ ...itemInfo, itemInfo: e.target.value })
                }
                className="newfeed-list"
                onClick={openModalHandler}
            >
                {itemInfo.category === "" ? "카테고리" : itemInfo.category}
            </button>

            <input
                className="newfeed-list"
                value={itemInfo.price}
                onChange={(e) =>
                    setItemInfo({ ...itemInfo, price: e.target.value })
                }
                type="number"
                placeholder="가격(원)"
            />

            <textarea
                className="newfeed-list newfeed-guide"
                value={itemInfo.text}
                onChange={(e) =>
                    setItemInfo({ ...itemInfo, text: e.target.value })
                }
                placeholder="게시글 내용을 작성해주세요. 가짜 품목 및 판매금지품목은 게시가
                제한됩니다."
            ></textarea>
        </div>
    );
};

export default NewFeedView;
