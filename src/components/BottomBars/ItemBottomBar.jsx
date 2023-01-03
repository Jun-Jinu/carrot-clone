import React, {useState} from "react";
import { Link } from "react-router-dom";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

import './styles/ItemBottomBar.scss';

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