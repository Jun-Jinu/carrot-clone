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
                            src={props.imgUrl}
                            alt="card-img"
                        ></img>
                    </div>

                    <div className="card-info">
                        <span className="card-name">{props.title}</span>
                        <br />
                        <span className="card-price">{props.price}</span>

                        {// 0이 아닌경우에만 표시
                            props.likeCount !== 0 && (
                            <div className="card-like">
                                <span className="card-like-count">
                                    <IoHeartOutline size="20px" /> {props.likeCount}
                                </span>
                            </div>
                        )}

                        {props.status !== "판매중" && (<div className="card-status-box">거래완료</div>)}
                        
                    </div>
                </div>
            </Link>
        </>
    );
}

export default ItemCard;