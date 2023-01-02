import React, { useState } from "react";

import MenuTopbar from "../../utils/MenuTopBar";
import CategoryTab from "../../utils/CategoryTab";
import ItemCard from "../../utils/ItemCard";
import ItemChangeBar from "../../utils/ItemChangeBar";

const SellList = () => {
    const [menuTab, setMenuTab] = useState(0);
    const menuArr = ["판매중", "거래완료"];

    //ItemChangeBar 상태 교체하는거 추가해야 함(프롭스로 set 넘기는거)
    return (
        <>
            <MenuTopbar title="판매내역" />
            <CategoryTab
                menuArr={menuArr}
                menuTab={menuTab}
                setMenuTab={setMenuTab}
            />

            <ItemCard likeCount={15} traded={true} />
            <ItemChangeBar />

            <ItemCard likeCount={10} traded={false} />
            <ItemChangeBar />
        </>
    );
};

export default SellList;
