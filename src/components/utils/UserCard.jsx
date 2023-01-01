import React from "react";

import { TbUserCircle } from "react-icons/tb";
import "./UserCard.scss"

const UserCard = () => {
    return (
    <div className="user-card-container">
        <div className="user-card-img-container">
            <TbUserCircle size="18vh" />
        </div>

        <div className="user-card-info">
            <span className="user-card-name">닉네임</span>
            <br />
            <span className="user-card-content">마지막 채팅 내용</span>
        </div>

        <div className="user-card-img-container">
            <img
                className="user-card-img"
                src="https://sitem.ssgcdn.com/64/22/91/item/1000438912264_i2_290.jpg"
            ></img>
        </div>
    </div>
    );
}

export default UserCard;