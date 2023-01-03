import React from "react";

import MenuTopbar from "../../components/TopBars/MenuTopBar";
import NewFeedView from "../../components/views/NewFeedView";

const NewFeedPage = () => {
    return (
        <>
            <MenuTopbar title="중고거래 글쓰기" />
            <NewFeedView />
        </>
    );
};

export default NewFeedPage;
