import React from "react";

import MenuTopbar from "../../utils/MenuTopBar";

const NewFeedPage = () => {
    return (
        <>
            <MenuTopbar title="중고거래 글쓰기" />
            <div className="">
                <div></div>
                <input type="text" placeholder="제목" />
                <div></div>
                <input type="number" placeholder="가격(원)" />
                <span>
                    게시글 내용을 작성해주세요. 가짜 품목 및 판매금지품목은
                    게시가 제한됩니다.
                </span>
            </div>
        </>
    );
};

export default NewFeedPage;
