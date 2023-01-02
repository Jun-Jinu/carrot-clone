import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { TbUserCircle } from "react-icons/tb";

import "./ItemView.scss";

export const SellingItem = (props) => {
    return (
        <div className="item-selling-card">
            <img className="item-img" src={props.src} />
            <span className="item-title">{props.title}</span>
            <span className="item-price">{props.price}</span>
        </div>
    );
};

const ItemView = () => {
    const itemArr = [
        {
            src: "https://sitem.ssgcdn.com/64/22/91/item/1000438912264_i2_290.jpg",
            title: "케이크1",
            price: "5000원",
        },
        {
            src: "https://sitem.ssgcdn.com/64/22/91/item/1000438912264_i2_290.jpg",
            title: "케이크2",
            price: "7000원",
        },
        {
            src: "https://sitem.ssgcdn.com/64/22/91/item/1000438912264_i2_290.jpg",
            title: "케이크3",
            price: "8000원",
        },
    ];

    return (
        <div className="item-detail-container">
            <img
                className="main-item-img"
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
            <div className="item-selling-container">
                <div className="item-selling-title">
                    <span className="selling-list">닉네임님의 판매 상품</span>
                    <Link
                        to="/user_sell_list"
                        style={{ textDecoration: "none" }}
                    >
                        <span className="view-all">모두보기</span>
                    </Link>
                </div>
                <div className="item-list-container">
                    {itemArr.map((el, index) => (
                        <SellingItem
                            src={el.src}
                            title={el.title}
                            price={el.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemView;
