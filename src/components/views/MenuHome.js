import React from "react";

import { Link } from "react-router-dom";
import ItemCard from "../../components/utils/ItemCard";

import "./styles/MenuHome.scss";

const MenuHome = () => {
    return (
        <div className="contents-view">
            <Link to="/new_feed">
                <div className="newfeed-img-container">
                    <span className="newfeed-icon">+</span>
                </div>
            </Link>
            <ItemCard likeCount={22} traded={false} />
        </div>
    );
};

export default MenuHome;
