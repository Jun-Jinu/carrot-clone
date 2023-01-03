import React from "react";
import { Link } from "react-router-dom";

import "../styles/IntroPages.scss";

import carrot_logo from "../../resources/carrot_img.png";

import Button from "../../components/utils/Button";

const FirstPage = () => {
    return (
        <div className="page-container">
            <div className="intro-img-container">
                <img className="logo" src={carrot_logo} alt="당근로고"></img>
            </div>
            <span className="discription-title">당신 근처의 당근마켓</span>
            <br />
            <span className="discription-content">
                중고 거래부터 동네 정보까지,
                <br />
                지금 내 동내를 선택하고 시작해보세요!
            </span>
            <Link to="/signin">
                <Button
                    buttonPosition="btn-bottom"
                    buttonColors="btn-primary"
                    buttonSize="btn-large"
                    onClick=""
                    type="button"
                    name="시작하기"
                />
            </Link>
            <div className="position-bottom">
                <span>이미 계정이 있나요?</span>
                <Link to="/login" style={{ textDecoration: "none" }}>
                    <span className="color-primary">로그인</span>
                </Link>
            </div>
        </div>
    );
};

export default FirstPage;
