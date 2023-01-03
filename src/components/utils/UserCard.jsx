import React from "react";
import { Link } from "react-router-dom";
import { TbUserCircle } from "react-icons/tb";
import "./styles/UserCard.scss"

const UserCard = () => {
    return (
        <Link to="/chatting">
            <div className="user-card-container">
                <div className="user-card-img-container">
                    <TbUserCircle size="14vh" />
                </div>

                <div className="user-card-info">
                    <div className="info-container">
                        <span className="user-card-text">닉네임</span>
                    </div>
                    <div className="info-container">
                        <span className="user-card-text user-card-content">마지막 채팅 내용</span>
                    </div>
                </div>

                <div className="user-card-img-container">
                    {/* 테스트 이미지 */}
                    <img
                        className="user-card-img"
                        src="https://sitem.ssgcdn.com/64/22/91/item/1000438912264_i2_290.jpg"
                        alt="example-img"
                    ></img>
                </div>
            </div>
        </Link>
    );
}

export default UserCard;