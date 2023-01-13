import React from "react";
import { useParams } from "react-router-dom";

import ItemTopbar from "../../components/TopBars/ItemTopBar";
import ItemView from "../../components/views/ItemView";
import ItemBottomBar from "../../components/BottomBars/ItemBottomBar";

const ItemPage = () => {
    const { userEmail } = useParams();

    return (
        <>
            <ItemTopbar menuNum={0} />
            <ItemView />
            <ItemBottomBar menuNum={0} />
        </>
    );
};

export default ItemPage;
