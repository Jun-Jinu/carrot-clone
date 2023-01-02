import React, { useState } from "react";

import { Link } from "react-router-dom";
import { TbUserCircle } from "react-icons/tb";

import {
    IoDocumentTextOutline,
    IoHeartOutline,
    IoChatbubblesOutline,
} from "react-icons/io5";

import "../../style/HomePage.scss";
import "./MenuProfile.scss";

const MenuProfile = () => {
    return (
        <div className="contents-view">
            <div className="main-menu-container">
                <div className="main-menu-icon">
                    <TbUserCircle size="60px" />
                </div>
                <span className="main-menu-name nickname">닉네임</span>
            </div>

            <Link to="/myprofile" style={{ textDecoration: "none" }}>
                <div className="profile-btn-container">
                    <button className="btn-profile-change">프로필 수정</button>
                </div>
            </Link>
            <Link to="/my_sell_list" style={{ textDecoration: "none" }}>
                <div className="main-menu-container">
                    <div className="main-menu-icon">
                        <IoDocumentTextOutline size="50px" />
                    </div>

                    <span className="main-menu-name">판매내역</span>
                </div>
            </Link>
            <Link to="/like_list" style={{ textDecoration: "none" }}>
                <div className="main-menu-container">
                    <div className="main-menu-icon">
                        <IoHeartOutline size="50px" />
                    </div>
                    <span className="main-menu-name">관심목록</span>
                </div>
            </Link>
            <Link to="/chatting_list" style={{ textDecoration: "none" }}>
                <div className="main-menu-container">
                    <div className="main-menu-icon">
                        <IoChatbubblesOutline size="50px" />
                    </div>
                    <span className="main-menu-name">채팅목록</span>
                </div>
            </Link>
        </div>
    );
};

export default MenuProfile;
