import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { webUrlState } from "../../recoil/Recoil";

import MenuTopbar from "../../components/TopBars/MenuTopBar";
import CategoryTab from "../../components/utils/CategoryTab";
import ItemCard from "../../components/utils/ItemCard";

const UserSellList = () => {
    const { userId, nickName } = useParams();
    const url = useRecoilValue(webUrlState);
    const access_token = localStorage.getItem("access_token");
    const headers = {
        Authorization: `Bearer ${access_token}`,
    };

    // menuTab 값은 (전체: 0, 판매중: 1, 거래완료: 2)
    const [menuTab, setMenuTab] = useState(0);
    const menuArr = ["전체", "판매중", "거래완료"];
    const [itemArr, setItemArr] = useState([]);

    const itemSellerAxios = () =>
        axios
            .get(url + "api/item/" + userId + "/list", {
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
            <MenuTopbar title={nickName + "님 판매상품"} />
            <CategoryTab
                menuArr={menuArr}
                menuTab={menuTab}
                setMenuTab={setMenuTab}
            />

            {itemArr
                .filter((el) => menuTab === 0 || el.status === menuArr[menuTab])
                .map((el) => (
                    <ItemCard
                        title={el.title}
                        imgUrl={el.url}
                        price={el.price}
                        likeCount={el.likeCount}
                        status={el.status}
                    />
                ))}
        </>
    );
};

export default UserSellList;
