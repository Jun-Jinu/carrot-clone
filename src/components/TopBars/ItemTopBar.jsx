import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { WiDirectionLeft } from "react-icons/wi";
import { AiOutlineMore, AiTwotoneHome } from "react-icons/ai";

import { Link } from "react-router-dom";

import './styles/ItemTopBar.scss'

const ItemTopbar = (props) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 모달 상태
    const [isDeleteOpen, setIsDeleteOpen] = useState(false); // 메뉴 모달 상태

    const openMenuModalHandler = (event) => {
        setIsMenuOpen(!isMenuOpen);
    };
    const openDeleteModalHandler = (event) => {
        setIsDeleteOpen(!isDeleteOpen);
    };

    return (
        <>
            {/* 메뉴 모달 */}
            <div className="modal-container">
                {isMenuOpen ? (
                    <div className="menu-modal-backdrop" onClick={openMenuModalHandler}>
                        <div className="modal-view"
                            role="dialog"
                            onClick={(event) => {
                                //모달창을 누를때 꺼지지않게 함
                                event.stopPropagation();
                            }}
                        >
                            <div className="modal-list"
                                onClick={() => {
                                    //프로필 사진 설정 후 모달 닫기
                                    openMenuModalHandler();
                                }}
                            >
                                <Link to="/new_feed">
                                    <div className="modal-text">게시글 수정</div>
                                </Link>
                            </div>

                            <div className="modal-list"
                                onClick={() => {
                                    openMenuModalHandler();
                                    openDeleteModalHandler();
                                }}
                            >
                                <div className="modal-text">삭제</div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>

            {/* 삭제 확인 모달 */}
            <div className="modal-container">
                {isDeleteOpen ? (
                    <div className="delete-modal-backdrop" onClick={openDeleteModalHandler}>
                        <div className="modal-view"
                            role="dialog"
                            onClick={(event) => {
                                //모달창을 누를때 꺼지지않게 함
                                event.stopPropagation();
                            }}
                        >
                            <div className="modal-text">게시글을 정말 삭제 하시겠어요?</div>
                            <div className="modal-btn-container">
                                <button className="modal-btn" onClick={openDeleteModalHandler}>취소</button>
                                <button className="modal-btn">삭제</button>
                            </div>
                            
                        </div>
                    </div>
                ) : null}
            </div>
        
            <div className="item-top-bar">
                <div className="item-left pointer">
                    <WiDirectionLeft size="80px" onClick={() => navigate(-1)}/>
                    <AiTwotoneHome size="80px" onClick={() => navigate("../home")}/>
                </div>
                {props.menuNum === 1 ? (<div className="item-right pointer" onClick={openMenuModalHandler}><AiOutlineMore size="80px"/></div>) :(<div></div>)}
                
            </div>
        </>
    );
}

export default ItemTopbar;