import React from "react";
import { Link } from "react-router-dom";
import './styles/MainTabBar.scss'

import { AiOutlineHome, AiTwotoneHome } from "react-icons/ai";
import {
    IoPersonOutline,
    IoPerson,
} from "react-icons/io5";

const MainTabBar = (props) => {
    return (
        <div className="tab-bar">
            <Link to="/home">
                <div className="icon-container">
                    <div>
                        {props.menuNum === 0 ? (
                            <AiTwotoneHome size="10vh" />
                        ) : (
                            <AiOutlineHome size="10vh" />
                        )}
                    </div>
                    <span className="bar-menu">홈</span>
                </div>
            </Link>

            <Link to="/mycarrot">
                <div className="icon-container">
                    <div>
                        {props.menuNum === 0 ? (
                            <IoPersonOutline size="10vh" />
                        ) : (
                            <IoPerson size="10vh" />
                        )}
                    </div>
                    <span className="bar-menu">나의 당근</span>
                </div>
            </Link>
        </div>
    );
}

export default MainTabBar;