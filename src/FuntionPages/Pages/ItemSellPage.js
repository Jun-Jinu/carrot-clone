import React from "react";

import ItemTopbar from "../../components/TopBars/ItemTopBar";
import ItemView from "../../components/views/ItemView";
import ItemBottomBar from "../../components/BottomBars/ItemBottomBar";

const ItemSellPage = () => {
    return (
        <>
            <ItemTopbar menuNum={1} />
            <ItemView />
            <ItemBottomBar menuNum={1} />
        </>
    );
};

export default ItemSellPage;
