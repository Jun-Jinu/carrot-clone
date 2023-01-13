import React from 'react'
import axios from "axios";
import { useRecoilValue } from "recoil";
import { webUrlState } from "../../recoil/Recoil";

import './styles/ItemChangeBar.scss'

const ItemChangeBar = (props) => {
    const url = useRecoilValue(webUrlState);
    const access_token = localStorage.getItem("access_token");
    const headers = {
        Authorization: `Bearer ${access_token}`,
    };

    //임시 데이터
    const itemId = '2';
    let han = encodeURI(encodeURIComponent("거래완료"));

    // status는 판매중, 예약중, 판매완료 중 하나
    const updateItemStatusrAxios = (status) =>
        axios
            .patch(url + "api/item/" + itemId + "/status?status=" + status, {
                headers: headers,
            })
            .then((res) => {
                alert("상태가 " + status + "로 변경되었습니다.")
                console.log(res);
            })
            .catch((err) => {
                alert("예기치못한 에러가 발생했습니다.");
                console.log("에러 내용: " + err);
            });


    return (
        <ul className="item-change-container">
            <li className="item-change-btn" onClick={() => updateItemStatusrAxios("예약중")}>
                예약중으로 변경
            </li>

            <li className="item-change-btn" onClick={() => updateItemStatusrAxios(han)}>
                거래완료로 변경
            </li>
        </ul>
    );
}

export default ItemChangeBar;