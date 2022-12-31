import React from "react";
import {
    IoSearch,
    IoReorderThree,
} from "react-icons/io5";

import { Link } from "react-router-dom";

import './MainTopBar.scss'

const MainTopBar = (props) => {

    return (<div className="top-bar">
    <span className="bar-title">
        {props.menuNum === 0 ? "개발자님 동네" : "나의 당근"}
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