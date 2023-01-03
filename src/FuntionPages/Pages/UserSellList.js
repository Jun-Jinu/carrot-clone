import React, { useState } from "react";

import MenuTopbar from "../../components/TopBars/MenuTopBar";
import CategoryTab from "../../components/utils/CategoryTab";
import ItemCard from "../../components/utils/ItemCard";

const UserSellList = () => {
    const [menuTab, setMenuTab] = useState(0);
    const menuArr = ["전체", "판매중", "거래완료"];

    //ItemChangeBar 상태 교체하는거 추가해야 함(프롭스로 set 넘기는거)
    return (
        <>
            <MenuTopbar title="OOO님 판매상품" />
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

export default UserSellList;
