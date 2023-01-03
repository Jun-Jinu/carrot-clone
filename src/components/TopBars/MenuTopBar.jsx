import React from "react";
import { useNavigate } from "react-router-dom";

import { WiDirectionLeft } from "react-icons/wi";

import './styles/MenuTopBar.scss'

const MenuTopbar = (props) => {
    const navigate = useNavigate();

    return (
    <div className="top-bar">
        <div
            // bartitle-> left로 수정
            className="bar-title pointer"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <WiDirectionLeft size="100px" />
        </div>
        <div className="bar-content">
            <span className="bar-title">
                {props.title}
            </span>
        </div>
        <div className="blank-space"><span></span></div>
    </div>
    );
}

export default MenuTopbar;