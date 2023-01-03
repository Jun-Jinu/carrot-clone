import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlineCamera, AiOutlineCloseCircle } from "react-icons/ai";

import "./styles/NewFeedView.scss";

export const CategoryArr = [
    "디지털기기",
    "생활가전",
    "가구/인테리어",
    "유아동",
    "생활/가공식품",
    "유아도서",
    "스포츠/레저",
    "여성잡화",
    "여성의류",
    "남성패션/잡화",
    "게임/취미",
    "뷰티/미용",
    "반려동물용품",
    "도서/티켓/음반",
    "식물",
    "기타 중고물품",
    "중고차",
];

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
    const [imageNum, setImageNum] = useState(0); // 이미지 개수
    const [isOpen, setIsOpen] = useState(false); // 카테고리 모달 상태
    const [category, setCategory] = useState(null);

    const imageInput = useRef(); //이미지 삽입 참조

    const openModalHandler = (event) => {
        setIsOpen(!isOpen);
    };

    const addImage = () => {
        //파일 추가 버튼 클릭 이벤트
        imageInput.current.click();

        setImageNum(imageNum + 1);
    };
    const handleChange = (e) => {
        console.log(e.target.files[0]);
    };

    const deleteImage = () => {};

    return (
        <div className="newfeed-container">
            {/* 이거 상위탭에 넣을지?? */}
            <button
                type="submit"
                className="newfeed-submit-btn"
                onClick={() => {
                    //서버로 보내는 함수 넣기
                }}
            >
                완료
            </button>
            <input
                type="file"
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
                            {CategoryArr.map((el, index) => (
                                <ModalList
                                    onClick={() => {
                                        //카테고리 설정 후 모달 닫기
                                        setCategory(el);
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
                            <span>{imageNum}</span> / 10
                        </span>
                    </AddImageBtn>
                </ImageContainer>

                <ImageContainer>
                    <ItemImage src="https://sitem.ssgcdn.com/64/22/91/item/1000438912264_i2_290.jpg" />
                    <AiOutlineCloseCircle
                        className="img-delete-btn"
                        onClick={deleteImage}
                        // 여기 삭제 추가 버튼 인덱스 생각해야함
                    />
                </ImageContainer>
            </div>
            <input className="newfeed-list" type="text" placeholder="제목" />
            <button
                type="button"
                className="newfeed-list"
                onClick={openModalHandler}
            >
                {category === null ? "카테고리" : category}
            </button>
            <input
                className="newfeed-list"
                type="number"
                placeholder="가격(원)"
            />
            <textarea
                className="newfeed-list newfeed-guide"
                placeholder="게시글 내용을 작성해주세요. 가짜 품목 및 판매금지품목은 게시가
                제한됩니다."
            ></textarea>
        </div>
    );
};

export default NewFeedView;
