import React from "react";

import { TbUserCircle } from "react-icons/tb";
import { AiOutlineSend } from "react-icons/ai";

import "./ChatView.scss";

export const MyChat = (text) => {
    return (
        <div className="chat my-chat">
            <span className="chat-text">{text}</span>
        </div>
    );
};

export const YourChat = (text) => {
    return (
        <div className="chat your-chat">
            <div className="chat-icon">
                <TbUserCircle size="60px" />
                <span>닉네임</span>
            </div>
            <span className="chat-text">{text}</span>
        </div>
    );
};

export const ChatBottomBar = () => {
    return (
        <div className="chat-bottom-bar">
            <span>+</span>
            <input placeholder="메세지 보내기" />
            <AiOutlineSend />
        </div>
    );
};

const ChatView = () => {
    return (
        <div className="chat-container">
            {MyChat("나의 채팅입니다.")}
            {YourChat("상대방의 채팅입니다.")}

            {/* 스크롤시 채팅창 보이게하기 위한 빈공간 */}
            <div className="chat-blank-space"></div>

            {ChatBottomBar()}
        </div>
    );
};

export default ChatView;
