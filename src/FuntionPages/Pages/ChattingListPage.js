import React from "react";

import MenuTopbar from "../../components/TopBars/MenuTopBar";
import UserCard from "../../components/utils/UserCard";

const ChattingList = () => {
    return (
        <>
            <MenuTopbar title="채팅목록" />
            <UserCard />
            <UserCard />
        </>
    );
};

export default ChattingList;
