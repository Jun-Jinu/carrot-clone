import React, { useState } from "react";

import { Link } from "react-router-dom";
import { TbUserCircle } from "react-icons/tb";

import {
    IoDocumentTextOutline,
    IoHeartOutline,
    IoChatbubblesOutline,
} from "react-icons/io5";

import "../../style/HomePage.scss";

const MenuProfile = () => {
    return (
        <>
            <div>
                <TbUserCircle size="60px" />
                <span>닉네임</span>
            </div>
            <button>프로필 수정</button>

            <div>
                <IoDocumentTextOutline size="50px" />
                <span>판매내역</span>
            </div>

            <div>
                <IoHeartOutline size="50px" />
                <span>관심목록</span>
            </div>

            <div>
                <IoChatbubblesOutline size="50px" />
                <span>채팅목록</span>
            </div>
        </>
    );
};

export default MenuProfile;
