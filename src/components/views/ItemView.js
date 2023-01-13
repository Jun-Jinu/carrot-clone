import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { webUrlState } from "../../recoil/Recoil";

import { TbUserCircle } from "react-icons/tb";

import "./styles/ItemView.scss";

export const SellingItem = (props) => {
    return (
        //클릭시 이벤트를 추가해줘야 함
        <div className="item-selling-card">
            <img className="item-img" src={props.url} alt="물건 메인 이미지" />
            <span className="item-title">{props.title}</span>
            <span className="item-price">{props.price}</span>
        </div>
    );
};

const ItemView = () => {
    const { itemId } = useParams();
    const url = useRecoilValue(webUrlState);
    const access_token = localStorage.getItem("access_token");
    const headers = {
        Authorization: `Bearer ${access_token}`,
    };

    //상품 정보 상태
    const [itemInfo, setItemInfo] = useState({
        photoUrls: "",
        title: "",
        category: "",
        price: "",
        text: "",
        updatedAt: "",
        likeCount: "",
        status: "",
    });

    //판매자 정보 상태
    const [ownerInfo, setOwnerInfo] = useState({
        nickName: "",
        thumbnail: "",
        userId: 0,
    });

    //판매자 상품 상태
    const [ownerItems, setOwnerItems] = useState([]);

    const itemLoadAxios = () =>
        axios
            .get(url + "api/item/" + itemId, {
                headers: headers,
            })
            .then((res) => {
                console.log(res.data.data);
                let resData = res.data.data;

                //아이템 정보 저장
                setItemInfo({
                    photoUrls: resData.photoUrls[0],
                    title: resData.title,
                    category: resData.category,
                    price: resData.price,
                    text: resData.text,
                    updatedAt: resData.updatedAt,
                    likeCount: resData.likeCount,
                    status: resData.status,
                });

                //판매자 정보 저장
                setOwnerInfo({
                    nickName: resData.createUser.nickName,
                    thumbnail: resData.createUser.thumbnail,
                    userId: resData.createUser.userId,
                });

                //같은 판매자의 아이템 저장
                setOwnerItems(resData.itemList);
            })
            .catch((err) => {
                alert("예기치못한 에러가 발생했습니다.");
                console.log("에러 내용: " + err);
            });

    useEffect(() => {
        console.log("호출호출");
        itemLoadAxios();
    }, []);

    return (
        <div className="item-detail-container">
            <img
                className="main-item-img"
                src={itemInfo.photoUrls}
                alt="아이템 메인 이미지"
            ></img>
            <div className="item-owner-container">
                {ownerInfo.thumbnail === "" ? (
                    <TbUserCircle className="item-owner-img" />
                ) : (
                    <img
                        className="item-owner-img"
                        src={ownerInfo.thumbnail}
                        alt="판매자 프로필 이미지"
                    />
                )}

                <span>{ownerInfo.nickName}</span>
            </div>
            <div className="item-detail-info">
                <select defaultValue="1" name="sell_state">
                    <option value="1">판매중</option>
                    <option value="2">예약중</option>
                    <option value="3">판매완료</option>
                </select>
                <span className="text title">{itemInfo.title}</span>
                <span className="text category">
                    {itemInfo.category} • {itemInfo.updatedAt}
                </span>
                <span className="text content">본문</span>
                {itemInfo.text}
                <br />
                -
                <br />
                <br />
                -
                <br />
                <br />
                -
                <br />
                <br />
            </div>
            <div className="item-selling-container">
                <div className="item-selling-title">
                    <span className="selling-list">
                        {ownerInfo.nickName}님의 판매 상품
                    </span>
                    <Link
                        to="/user_sell_list"
                        style={{ textDecoration: "none" }}
                    >
                        <span className="view-all">모두보기</span>
                    </Link>
                </div>
                <div className="item-list-container">
                    {ownerItems.map((el, index) => (
                        <SellingItem
                            url={el.url}
                            title={el.title}
                            price={el.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemView;
