import React, { useState, useRef } from "react";
import styled from "styled-components";

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
    const [isChange, setIsChange] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // 하단 모달 상태
    const imageInput = useRef(); //이미지 삽입 참조

    const changeProfileImg = () => {
        //파일 추가 버튼 클릭 이벤트
        imageInput.current.click();
    };

    const handleChange = (e) => {
        console.log(e.target.files[0]);
    };

    const nicknameChange = (e) => {
        e.target.value === "" ? setIsChange(false) : setIsChange(true);
    };

    const openModalHandler = (event) => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="myprofile-container">
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
                                    //프로필사진 초기화 후 모달 닫기
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
                <TbUserCircle size="300px" />
                <AiOutlineCamera
                    className="myprofile-btn myprofile-change-btn"
                    onClick={openModalHandler}
                />
            </div>

            <input
                className="myprofile-nickname"
                placeholder="닉네임"
                onChange={nicknameChange}
            />

            <button
                className={
                    isChange === false
                        ? "myprofile-done-btn"
                        : "myprofile-btn myprofile-done-btn myprofile-changed-btn"
                }
            >
                완료
            </button>
        </div>
    );
};

export default MyProfile;
