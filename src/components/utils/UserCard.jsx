import React from "react";

import { TbUserCircle } from "react-icons/tb";
import "./UserCard.scss"

const UserCard = () => {
    const likeCount = 15;
    return (
    <div className="card-container">
        <div className="card-img-container">
            <TbUserCircle size="18vh" />
        </div>

        <div className="card-info">
            <span className="card-name">닉네임</span>
            <br />
            <span className="card-price">마지막 채팅 내용</span>

            <div className="card-like">
                <span className="like-count">
                    <TbUserCircle size="20px" /> {likeCount}
                </span>
            </div>

            
        </div>

        <div className="card-img-container">
            <img
                className="card-img"
                src="https://sitem.ssgcdn.com/64/22/91/item/1000438912264_i2_290.jpg"
            ></img>
        </div>
    </div>
    );
}

export default UserCard;