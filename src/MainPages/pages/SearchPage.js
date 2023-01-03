import React from "react";
import { useNavigate } from "react-router-dom";

import { WiDirectionLeft } from "react-icons/wi";

import "../styles/HomePage.scss";

const SearchPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="top-bar">
                <div
                    className="bar-title pointer"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <WiDirectionLeft size="100px" />
                </div>
                <div className="bar-content">
                    <input
                        className="input-search"
                        placeholder="우리동네에서 검색"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
