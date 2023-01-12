import React, { useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { webUrlState } from "../../recoil/Recoil";
import { TbUserCircle, TbTrash } from "react-icons/tb";
import { AiOutlineCamera } from "react-icons/ai";
import { BsImages } from "react-icons/bs";

import "./styles/MyProfile.scss";

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
    align-items: end;

    width: 100%;
    height: 100%;

    left: 0;
    right: 0;
    bottom: 0;

    margin: auto;
    background-color: rgba(0, 0, 0, 0.2);
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

    width: 100vw;
    height: 20vh;
    padding: 20px 0;
    border: 4px solid #aaa;
    border-radius: 20px 20px 0 0;
    position: relative;
`;

export const ModalList = styled.div`
    display: flex;
    align-items: center;

    padding-left: 40px;

    width: 100%;
    margin: auto;

    &:hover {
        cursor: pointer;
    }
`;

export const ModalText = styled.span`
    font-size: 40px;
    font-weight: 400;
    margin-left: 30px;
`;

const MyProfile = () => {
    const url = useRecoilValue(webUrlState);
    const access_token = localStorage.getItem("access_token");
    const headers = {
        Authorization: `Bearer ${access_token}`,
    };
    const navigate = useNavigate();

    const [isChange, setIsChange] = useState(false); // 버튼 활성화를 위한 프로필 정보 변화 기록
    const [isOpen, setIsOpen] = useState(false); // 하단 모달 상태
    const [imgFileSrc, setImgFileSrc] = useState(""); // 프로필 이미지 링크
    const [nickName, setNickName] = useState(""); // 닉네임
    const imageInput = useRef(); //이미지 삽입 참조

    const changeProfileImg = () => {
        //파일 추가 버튼 클릭 이벤트
        imageInput.current.click();
    };

    const thumnailChange = (e) => {
        const file = imageInput.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFileSrc(reader.result);
            // console.log(reader.result);
        };

        //완료버튼 활성화
        setIsChange(true);
    };

    const nicknameChange = (e) => {
        e.target.value === "" ? setIsChange(false) : setIsChange(true);
        setNickName(e.target.value);
    };

    const openModalHandler = (event) => {
        setIsOpen(!isOpen);
    };

    const updateProfileAxios = () => {
        const frm = new FormData(); //폼데이터 기록 변수

        frm.append("nickName", nickName);
        frm.append("thumbnail", imageInput.current.files[0]);
        axios
            .patch(url + "api/user/profile", frm, {
                headers: headers,
            })
            .then((res) => {
                alert("닉네임이 " + nickName + "으로 등록이 완료되었습니다.");
                navigate("/mycarrot");
            })
            .catch((err) => {
                alert("예기치못한 에러가 발생했습니다.");
                console.log(err);
            });
    };

    const deleteProfileAxios = () => {
        axios
            .delete(url + "api/user/profile", {
                headers: headers,
            })
            .then((res) => {
                console.log("프로필 이미지가 삭제 되었습니다");
            })
            .catch((err) => {
                alert("예기치못한 에러가 발생했습니다");
                console.log(err);
            });
    };

    const submitButton = () => {
        if (isChange === true) {
            updateProfileAxios();
            if (imgFileSrc === "") {
                // 설정한 이미지가 없을때
                deleteProfileAxios();
            }
        }
        // isChange === true ? updateProfileAxios() : updateProfileAxios();
    };

    return (
        <div className="myprofile-container">
            <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={imageInput}
                onChange={thumnailChange}
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
                            <ModalList
                                onClick={() => {
                                    //프로필 사진 설정 후 모달 닫기
                                    changeProfileImg();
                                    openModalHandler();
                                }}
                            >
                                <BsImages size="50px" />
                                <ModalText>앨범에서 선택</ModalText>
                            </ModalList>

                            <ModalList
                                onClick={() => {
                                    // 프로필 사진 삭제, 프로필 변화 기록, 모달 닫기
                                    setImgFileSrc("");
                                    setIsChange(true);
                                    openModalHandler();
                                }}
                            >
                                <TbTrash size="50px" />
                                <ModalText>프로필 사진 삭제</ModalText>
                            </ModalList>
                        </ModalView>
                    </ModalBackdrop>
                ) : null}
            </ModalContainer>

            <div className="myprofile-img-container">
                {imgFileSrc !== "" ? ( //이미지를 새로 등록했을 경우
                    <img
                        className="myprofile-img"
                        src={imgFileSrc}
                        alt="프로필 이미지"
                    />
                ) : (
                    //이미지 변화가 없으면
                    <TbUserCircle className="myprofile-img" />
                )}

                {/* 프로필 사진 등록, 삭제 버튼 */}
                <AiOutlineCamera
                    className="myprofile-btn myprofile-change-btn"
                    onClick={openModalHandler}
                />
            </div>

            <input
                className="myprofile-nickname"
                placeholder="닉네임"
                value={nickName}
                onChange={nicknameChange}
            />

            <button
                className={
                    isChange === false
                        ? "myprofile-done-btn"
                        : "myprofile-btn myprofile-done-btn myprofile-changed-btn"
                }
                onClick={submitButton}
            >
                완료
            </button>
        </div>
    );
};

export default MyProfile;
