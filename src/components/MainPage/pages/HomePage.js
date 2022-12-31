import React, { useState } from "react";

import { AiOutlineHome, AiTwotoneHome } from "react-icons/ai";

import {
    IoSearch,
    IoReorderThree,
    IoPersonOutline,
    IoPerson,
    IoHeartOutline,
} from "react-icons/io5";

import { WiDirectionLeft } from "react-icons/wi";

import "../style/HomePage.scss";

import MainTopBar from "../../utils/MainTopBar";
import MainTabBar from "../../utils/MainTabBar";

import MenuHome from "./view/MenuHome";
import MenuProfile from "./view/MenuProfile";

const HomePage = () => {
    const [barMenu, setBarMenu] = useState(0);

    return (
        <div>
            <MainTopBar menuNum={barMenu} />

            {barMenu === 0 ? <MenuHome /> : <MenuProfile />}

            <MainTabBar menuNum={barMenu} setMenu={setBarMenu} />
        </div>
    );
};

export default HomePage;
