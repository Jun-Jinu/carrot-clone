import React from "react";
import {
    IoSearch,
    IoReorderThree,
} from "react-icons/io5";

import { useRecoilValue } from "recoil";
import { loginUserState } from "../../recoil/Recoil";

import { Link } from "react-router-dom";

import './styles/MainTopBar.scss'

const MainTopBar = (props) => {
    const loginUser = useRecoilValue(loginUserState);

    return (<div className="top-bar">
    <span className="bar-title">
        {props.menuNum === 0 ?  + loginUser.nickName + "님 동네" : "나의 당근"}
    </span>
    <div className="bar-content">
        <Link to="/search">
            <IoSearch size="10vh" />
        </Link>
        <Link to="/category">
            <IoReorderThree size="10vh" />
        </Link>
    </div>
</div>);

}

export default MainTopBar;