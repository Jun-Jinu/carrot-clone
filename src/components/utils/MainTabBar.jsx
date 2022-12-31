import React from "react";

import './MainTabBar.scss'

import { AiOutlineHome, AiTwotoneHome } from "react-icons/ai";
import {
    IoPersonOutline,
    IoPerson,
} from "react-icons/io5";

const MainTabBar = (props) => {
    return (<div className="tab-bar">
    <div
        className="icon-container"
        onClick={() => {
            props.setMenu(0);
        }}
    >
        <div>
            {props.menuNum === 0 ? (
                <AiTwotoneHome size="10vh" />
            ) : (
                <AiOutlineHome size="10vh" />
            )}
        </div>
        <span className="bar-menu">홈</span>
    </div>

    <div
        className="icon-container"
        onClick={() => {
            props.setMenu(1);
        }}
    >
        <div>
            {props.menuNum === 0 ? (
                <IoPersonOutline size="10vh" />
            ) : (
                <IoPerson size="10vh" />
            )}
        </div>
        <span className="bar-menu">나의 당근</span>
    </div>
</div>);
}

export default MainTabBar;