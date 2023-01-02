import React from "react";
import { TbUserCircle } from "react-icons/tb";
import { IoHeartOutline } from "react-icons/io5";

import "./ItemView.scss";

const ItemView = () => {
    return (
        <div className="item-detail-container">
            <img
                className="item-img"
                src="https://sitem.ssgcdn.com/64/22/91/item/1000438912264_i2_290.jpg"
            ></img>
            <div>
                <TbUserCircle />
                <span>닉네임</span>
            </div>
            <div>
                <select defaultValue="1" name="sell_state">
                    <option value="1">판매중</option>
                    <option value="2">예약중</option>
                    <option value="3">판매완료</option>
                </select>
            </div>
            <div>
                <IoHeartOutline />
                가격
                <button>관련 채팅보기</button>
            </div>
        </div>
    );
};

export default ItemView;
