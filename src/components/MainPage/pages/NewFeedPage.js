import React from "react";

import MenuTopbar from "../../utils/MenuTopBar";
import NewFeedView from "./view/NewFeedView";

const NewFeedPage = () => {
    return (
        <>
            <MenuTopbar title="중고거래 글쓰기" />
            <NewFeedView />
        </>
    );
};

export default NewFeedPage;
