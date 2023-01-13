import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { webUrlState, loginUserState } from "../../recoil/Recoil";

import MenuTopbar from "../../components/TopBars/MenuTopBar";
import CategoryTab from "../../components/utils/CategoryTab";
import ItemCard from "../../components/utils/ItemCard";
import ItemChangeBar from "../../components/utils/ItemChangeBar";

const MySellList = () => {
    const url = useRecoilValue(webUrlState);
    const loginUser = useRecoilValue(loginUserState);
    const access_token = localStorage.getItem("access_token");
    const headers = {
        Authorization: `Bearer ${access_token}`,
    };

    // menuTab 값은 (판매중: 0, 거래완료: 1)
    const [menuTab, setMenuTab] = useState(0);
    const menuArr = ["판매중", "거래완료"];
    const [itemArr, setItemArr] = useState([]);

    const itemSellerAxios = () =>
        axios
            .get(url + "api/item/" + loginUser.userId + "/list", {
                headers: headers,
            })
            .then((res) => {
                console.log(res.data.data.content);
                setItemArr(res.data.data.content);
            })
            .catch((err) => {
                alert("예기치못한 에러가 발생했습니다.");
                console.log("에러 내용: " + err);
            });

    useEffect(() => {
        console.log("서버 데이터 호출: 아이템 리스트 로드");
        itemSellerAxios();
    }, []);
    //ItemChangeBar 상태 교체하는거 추가해야 함(프롭스로 set 넘기는거)
    return (
        <>
            <MenuTopbar title="판매내역" />
            <CategoryTab
                menuArr={menuArr}
                menuTab={menuTab}
                setMenuTab={setMenuTab}
            />

            {itemArr
                .filter((el) => el.status === menuArr[menuTab])
                .map((el) => {
                    return (
                        <>
                            <ItemCard
                                title={el.title}
                                imgUrl={el.url}
                                price={el.price}
                                likeCount={el.likeCount}
                                status={el.status}
                            />
                            <ItemChangeBar />
                        </>
                    );
                })}
        </>
    );
};

export default MySellList;
