import React, { useState, useEffect } from "react";
import axios from "axios";

import { useRecoilValue } from "recoil";
import { webUrlState } from "../../recoil/Recoil";

import "./styles/CategoryView.scss";

export const ItemCategory = (props) => {
    return (
        <div className="category-box">
            <span className="category-title">{props.title}</span>
        </div>
    );
};

const CategoryView = () => {
    const url = useRecoilValue(webUrlState);
    const access_token = localStorage.getItem("access_token");
    const headers = {
        Authorization: `Bearer ${access_token}`,
    };

    const [categoryArr, setCategoryArr] = useState([]); //카테고리 정보 저장 배열

    //카테고리 로딩
    const categoryListAxios = () =>
        axios
            .get(url + "api/item/category", {
                headers: headers,
            })
            .then((res) => setCategoryArr(res.data.data, ...categoryArr))
            .catch((err) => {
                alert("예기치못한 에러가 발생했습니다.");
                console.log(err);
            });

    useEffect(() => {
        categoryListAxios();
    }, []);

    return (
        <div className="category-container">
            {categoryArr.map((el, index) => (
                <ItemCategory title={el} key={index} />
            ))}
        </div>
    );
};

export default CategoryView;
