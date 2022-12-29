import React from "react";

import { Link } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";

import "../../style/HomePage.scss";

const MenuHome = () => {
    //여기 숫자는 예시
    const likeCount = 15;

    return (
        <>
            <Link to="/">
                <div className="newfeed-img-container">
                    <span className="newfeed-icon">+</span>
                </div>
            </Link>

            <div className="card-container">
                <div className="card-img-container">
                    <img
                        className="card-img"
                        src="https://sitem.ssgcdn.com/64/22/91/item/1000438912264_i2_290.jpg"
                    ></img>
                </div>

                <div className="card-info">
                    <span className="card-name">맛있는 쿠앤크 케이크</span>
                    <br />
                    <span className="card-place">중곡동 - 1시간전</span>
                    <br />
                    <span className="card-price">5,000원</span>

                    {/* 0이 아닌경우에만 표시 */}
                    {likeCount !== 0 && (
                        <div className="card-like">
                            <span className="like-count">
                                <IoHeartOutline size="20px" /> {likeCount}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MenuHome;
