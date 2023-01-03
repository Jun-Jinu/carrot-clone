import React, { useState } from "react";

import MenuTopbar from "../../components/TopBars/MenuTopBar";
import CategoryTab from "../../components/utils/CategoryTab";
import ItemCard from "../../components/utils/ItemCard";

const LikeList = () => {
    const [menuTab, setMenuTab] = useState(0);
    const menuArr = ["전체", "판매중", "거래완료"];

    return (
        <>
            <MenuTopbar title="관심 목록" />
            <CategoryTab
                menuArr={menuArr}
                menuTab={menuTab}
                setMenuTab={setMenuTab}
            />
            <ItemCard />
        </>
    );
};

export default LikeList;
