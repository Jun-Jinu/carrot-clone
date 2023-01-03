import React from "react";

import MainTopBar from "../../components/TopBars/MainTopBar";
import MenuProfile from "../../components/views/MenuProfile";
import MainTabBar from "../../components/BottomBars/MainTabBar";

const HomePage2 = () => {
    return (
        <>
            <MainTopBar menuNum={1} />
            <MenuProfile />
            <MainTabBar menuNum={1} />
        </>
    );
};

export default HomePage2;
