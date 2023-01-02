import React, { useState } from "react";

import MenuTopbar from "../../utils/MenuTopBar";
import CategoryTab from "../../utils/CategoryTab";
import ItemCard from "../../utils/ItemCard";

const SellList = () => {
    const [menuTab, setMenuTab] = useState(0);
    const menuArr = ["판매중", "거래완료"];

    return (
        <>
            <MenuTopbar title="판매내역" />
            <CategoryTab
                menuArr={menuArr}
                menuTab={menuTab}
                setMenuTab={setMenuTab}
            />
            <ItemCard likeCount={15} traded={true} />
            <ItemCard likeCount={10} traded={false} />
        </>
    );
};

export default SellList;
