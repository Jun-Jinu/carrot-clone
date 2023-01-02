import React from "react";

import { Link } from "react-router-dom";
import ItemCard from "../../../utils/ItemCard";

import "../../style/HomePage.scss";

const MenuHome = () => {
    return (
        <div className="contents-view">
            <Link to="/">
                <div className="newfeed-img-container">
                    <span className="newfeed-icon">+</span>
                </div>
            </Link>
            <ItemCard likeCount={22} traded={false} />
        </div>
    );
};

export default MenuHome;
