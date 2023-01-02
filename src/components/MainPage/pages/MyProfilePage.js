import React from "react";

import MainTopBar from "../../utils/MainTopBar";

import MyProfile from "./view/MyProfile";

const MyProfilePage = () => {
    return (
        <>
            <MainTopBar menuNum={1} />
            <MyProfile />
        </>
    );
};

export default MyProfilePage;
