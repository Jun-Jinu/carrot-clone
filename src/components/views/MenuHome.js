import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useRecoilValue } from "recoil";
import { webUrlState } from "../../recoil/Recoil";

import ItemCard from "../../components/utils/ItemCard";

import "./styles/MenuHome.scss";

const MenuHome = () => {
    const url = useRecoilValue(webUrlState);
    const access_token = localStorage.getItem("access_token");
    const headers = {
        Authorization: `Bearer ${access_token}`,
    };

    const [itemArr, setItemArr] = useState([]);

    const itemListAxios = () =>
        axios
            .get(url + "api/item?page=0", {
                headers: headers,
            })
            .then((res) => setItemArr(res.data.data.content))
            .catch((err) => {
                alert("예기치못한 에러가 발생했습니다.");
                console.log(err);
            });

    useEffect(() => {
        console.log("아이템 리스트 호출");
        itemListAxios();
    }, []);

    return (
        <div className="contents-view">
            {/* 새로운 글쓰기 버튼(우측 하단) */}
            <Link to="/new_feed">
                <div className="newfeed-img-container">
                    <span className="newfeed-icon">+</span>
                </div>
            </Link>
            {itemArr.map((el) => (
                <ItemCard
                    title={el.title}
                    imgUrl={el.url}
                    price={el.price}
                    likeCount={el.likeCount}
                    status={el.status}
                />
            ))}
        </div>
    );
};

export default MenuHome;
