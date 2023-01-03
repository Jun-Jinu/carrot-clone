import React from "react";

import MainTopBar from "../../components/TopBars/MainTopBar";
import MenuHome from "../../components/views/MenuHome";
import MainTabBar from "../../components/BottomBars/MainTabBar";

const HomePage = () => {
    return (
        <>
            <MainTopBar menuNum={0} />
            <MenuHome />
            <MainTabBar menuNum={0} />
        </>
    );
};

export default HomePage;
