import React from "react";

import { useNavigate } from "react-router-dom";

import { WiDirectionLeft } from "react-icons/wi";
import { AiOutlineMore, AiTwotoneHome } from "react-icons/ai";

import { Link } from "react-router-dom";

import './ItemTopBar.scss'

const ItemTopbar = (props) => {
    const navigate = useNavigate();

    return (
    <div className="item-top-bar">
        <div className="item-left pointer">
            <WiDirectionLeft size="80px" onClick={() => navigate(-1)}/>
            <AiTwotoneHome size="80px" onClick={() => navigate("../home")}/>
        </div>
        <div className="item-right pointer"><AiOutlineMore size="80px"/></div>
    </div>
    );
}

export default ItemTopbar;