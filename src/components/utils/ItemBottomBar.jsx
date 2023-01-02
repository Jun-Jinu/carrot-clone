import React, {useState} from "react";

import './ItemBottomBar.scss';

import { IoHeartOutline, IoHeart } from "react-icons/io5";

const ItemBottomBar = (props) => {
    const [isLike, setIsLike] = useState(false);

    const likeHandler = () =>{
        setIsLike(!isLike);
    }

    return (
        <div className="bottom-bar">
            <div className="bottom-left-container" onClick={likeHandler}>
                {isLike === false ? (<IoHeartOutline className="bottom-left-icon" />) : (<IoHeart className="bottom-left-icon" />)}
                <div className="bottom-left-price">가격</div>
            </div>

            <button className="bottombar-right-btn">관련 채팅보기</button>
        </div>
    );
}

export default ItemBottomBar;