import React from "react";

import MenuTopbar from "../../components/TopBars/MenuTopBar";
import ItemCard from "../../components/utils/ItemCard";
import ChatView from "../../components/views/ChatView";

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
