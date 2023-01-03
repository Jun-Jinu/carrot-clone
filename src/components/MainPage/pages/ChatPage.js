import React from "react";

import MenuTopbar from "../../utils/MenuTopBar";
import ItemCard from "../../utils/ItemCard";
import ChatView from "./view/ChatView";

const ChatPage = () => {
    return (
        <>
            <MenuTopbar title="닉네임" />
            <ItemCard />
            <ChatView />

            <div></div>
        </>
    );
};

export default ChatPage;
