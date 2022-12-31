import React from "react";

import { Link } from "react-router-dom";
import ItemCard from "../../../utils/ItemCard";

import "../../style/HomePage.scss";

const MenuHome = () => {
    //여기 숫자는 예시
    const likeCount = 15;

    return (
        <div className="contents-view">
            <Link to="/">
                <div className="newfeed-img-container">
                    <span className="newfeed-icon">+</span>
                </div>
            </Link>
            <ItemCard />
        </div>
    );
};

export default MenuHome;
