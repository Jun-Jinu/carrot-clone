import React from "react";

import MainTopBar from "../../components/TopBars/MainTopBar";
import MyProfile from "../../components/views/MyProfile";

const MyProfilePage = () => {
    return (
        <>
            <MainTopBar menuNum={1} />
            <MyProfile />
        </>
    );
};

export default MyProfilePage;
