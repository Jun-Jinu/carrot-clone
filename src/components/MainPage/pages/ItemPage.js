import React from "react";

import ItemTopbar from "../../utils/ItemTopBar";
import ItemView from "./view/ItemView";
import ItemBottomBar from "../../utils/ItemBottomBar";

const ItemPage = () => {
    return (
        <>
            <ItemTopbar />
            <ItemView />
            <ItemBottomBar />
        </>
    );
};

export default ItemPage;
