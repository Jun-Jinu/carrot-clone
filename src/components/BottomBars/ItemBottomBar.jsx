import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { webUrlState } from "../../recoil/Recoil";

import { IoHeartOutline, IoHeart } from "react-icons/io5";

import './styles/ItemBottomBar.scss';

const ItemBottomBar = (props) => {
    const { itemId } = useParams();
    const url = useRecoilValue(webUrlState);
    const access_token = localStorage.getItem("access_token");
    const headers = {
        Authorization: `Bearer ${access_token}`,
    };

    //상품 정보 상태
    const [itemInfo, setItemInfo] = useState({
        price: 0,
        like: false,
    });


    // 좋아요를 누를 경우
    const likeHandler = () =>{
        setItemInfo({...itemInfo, like: !itemInfo.like});

        // axios
        //     .post(url + "api/like/" + itemId, {
        //         headers: headers,
        //     })
        //     .then((res) => {
        //         // console.log(res.data.data);
        //         let resData = res.data.data;

        //         //아이템 정보 저장
        //         setItemInfo({
        //             price: resData.price,
        //             like: resData.like,
        //         });
        //     })
        //     .catch((err) => {
        //         alert("예기치못한 에러가 발생했습니다.");
        //         console.log("에러 내용: " + err);
        //     });
    }

    const itemLoadAxios = () =>
        axios
            .get(url + "api/item/" + itemId, {
                headers: headers,
            })
            .then((res) => {
                // console.log(res.data.data);
                let resData = res.data.data;

                //아이템 정보 저장
                setItemInfo({
                    price: resData.price,
                    like: resData.like,
                });
            })
            .catch((err) => {
                alert("예기치못한 에러가 발생했습니다.");
                console.log("에러 내용: " + err);
            });

    useEffect(() => {
        console.log("서버 데이터 호출");
        itemLoadAxios();
    }, []);

    return (
        <div className="bottom-bar">
            <div className="bottom-left-container" onClick={likeHandler}>
                {itemInfo.like === false ? (<IoHeartOutline className="bottom-left-icon" />) : (<IoHeart className="bottom-left-icon" />)}
                <div className="bottom-left-price">{itemInfo.price.toLocaleString("ko-KR", 4)} 원</div>
            </div>
            {props.menuNum === 1 ? (
            <Link to="/chatting_list">
                <button className="bottombar-right-btn">관련 채팅보기</ button>
            </Link>) : (

            <Link to="/chatting">
                <button className="bottombar-right-btn">채팅하기</ button>
            </Link>
            )}
        </div>
    );
}

export default ItemBottomBar;