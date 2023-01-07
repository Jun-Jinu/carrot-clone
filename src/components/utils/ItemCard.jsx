import React from "react";
import { Link } from "react-router-dom";

import { IoHeartOutline } from "react-icons/io5";
import "./styles/ItemCard.scss"

const ItemCard = (props) => {
    let link = "/item";
    if (props.menuNum === 1 ){
        link = "/item_selling";
    }
    
    return (
        <>
            <Link to={link}>
                <div className="card-container">
                    <div className="card-img-container">
                        <img
                            className="card-img"
                            src="https://sitem.ssgcdn.com/64/22/91/item/1000438912264_i2_290.jpg"
                            alt="example-img"
                        ></img>
                    </div>

                    <div className="card-info">
                        <span className="card-name">맛있는 쿠앤크 케이크</span>
                        <br />
                        <span className="card-price">5,000원</span>

                        {/* 0이 아닌경우에만 표시 */}
                        {
                            props.likeCount !== 0 && (
                            <div className="card-like">
                                <span className="card-like-count">
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