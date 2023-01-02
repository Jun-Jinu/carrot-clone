import React from "react";
import { Link } from "react-router-dom";

import { IoHeartOutline } from "react-icons/io5";
import "./ItemCard.scss"

const ItemCard = (props) => {
    return (
        <>
        <Link to="/item">
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
                        {
                            props.likeCount !== 0 && (
                            <div className="card-like">
                                <span className="like-count">
                                    <IoHeartOutline size="20px" /> {props.likeCount}
                                </span>
                            </div>
                        )}

            {
                        props.traded === true && (<div className="card-traded_box">거래완료</div>
                    )}
                        
                    </div>

                    

                </div>
            </Link>
        </>
    );
}

export default ItemCard;