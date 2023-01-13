import React from "react";

import ItemTopbar from "../../components/TopBars/ItemTopBar";
import ItemView from "../../components/views/ItemView";
import ItemBottomBar from "../../components/BottomBars/ItemBottomBar";

const ItemPage = () => {
    return (
        <>
            <ItemTopbar menuNum={0} />
            <ItemView />
            <ItemBottomBar menuNum={0} />
        </>
    );
};

export default ItemPage;
