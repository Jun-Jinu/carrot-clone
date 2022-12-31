import React from "react";

import MenuTopbar from "../../utils/MenuTopBar";
import UserCard from "../../utils/UserCard";

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
