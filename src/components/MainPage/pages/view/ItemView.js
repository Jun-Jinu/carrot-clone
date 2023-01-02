import React, { useState } from "react";
import styled from "styled-components";

import { TbUserCircle } from "react-icons/tb";
import { IoHeartOutline } from "react-icons/io5";

import ItemBottomBar from "../../../utils/ItemBottomBar";

import "./ItemView.scss";

const ItemView = () => {
    return (
        <div className="item-detail-container">
            <img
                className="item-img"
                src="https://sitem.ssgcdn.com/64/22/91/item/1000438912264_i2_290.jpg"
            ></img>
            <div className="item-owner-container">
                <TbUserCircle className="item-owner-img" />
                <span>닉네임</span>
            </div>
            <div className="item-detail-info">
                <select defaultValue="1" name="sell_state">
                    <option value="1">판매중</option>
                    <option value="2">예약중</option>
                    <option value="3">판매완료</option>
                </select>
                <span className="text title">제목</span>
                <span className="text category">카테고리 • 게시시간</span>
                <span className="text content">본문</span>
                <br />
                -
                <br />
                <br />
                -
                <br />
                <br />
                -
                <br />
                <br />
            </div>
            <ItemBottomBar />
        </div>
    );
};

export default ItemView;
