import React, { useState } from "react";

import MenuTopbar from "../../components/TopBars/MenuTopBar";
import CategoryTab from "../../components/utils/CategoryTab";
import ItemCard from "../../components/utils/ItemCard";
import ItemChangeBar from "../../components/utils/ItemChangeBar";

const MySellList = () => {
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

            <ItemCard menuNum={1} likeCount={15} traded={true} />
            <ItemChangeBar />

            <ItemCard menuNum={1} likeCount={10} traded={false} />
            <ItemChangeBar />

            <ItemCard menuNum={1} likeCount={0} traded={false} />
            <ItemChangeBar />
        </>
    );
};

export default MySellList;
