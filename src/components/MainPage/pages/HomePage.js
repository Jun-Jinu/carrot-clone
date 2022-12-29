import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
    AiOutlineHome,
    AiTwotoneHome,
    AiOutlineArrowLeft,
} from "react-icons/ai";

import {
    IoSearch,
    IoReorderThree,
    IoPersonOutline,
    IoPerson,
    IoHeartOutline,
} from "react-icons/io5";

import "../style/HomePage.scss";

import MenuHome from "./view/MenuHome";
import MenuProfile from "./view/MenuProfile";

const HomePage = () => {
    const [barMenu, setBarMenu] = useState(0);
    const likeCount = 15;

    return (
        <div>
            <div className="top-bar">
                <span className="bar-title">
                    {barMenu === 0 ? "개발자님 동네" : "나의 당근"}
                </span>
                <div className="bar-content">
                    <Link to="/">
                        <IoSearch size="10vh" />
                    </Link>
                    <Link to="/">
                        <IoReorderThree size="10vh" />
                    </Link>
                </div>
            </div>

            <div className="contents-view">
                {barMenu === 0 ? <MenuHome /> : <MenuProfile />}
            </div>

            <div className="tab-bar">
                <div
                    className="icon-container"
                    onClick={() => {
                        setBarMenu(0);
                    }}
                >
                    <div>
                        {barMenu === 0 ? (
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
                        setBarMenu(1);
                    }}
                >
                    <div>
                        {barMenu === 0 ? (
                            <IoPersonOutline size="10vh" />
                        ) : (
                            <IoPerson size="10vh" />
                        )}
                    </div>
                    <span className="bar-menu">나의 당근</span>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
