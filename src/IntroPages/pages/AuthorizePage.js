import React from "react";
import { Link, useParams } from "react-router-dom";

import "../styles/IntroPages.scss";

import Button from "../../components/utils/Button";

const AuthorizePage = () => {
    const { userEmail } = useParams();

    return (
        <div className="page-container">
            <h2 className="guide">
                입력하신 {userEmail} 으로
                <br />
                인증메일은 전송했습니다.
                <br />
                메일은 인증하고
                <br />
                당근마켓을 시작해보세요
            </h2>

            <Link to="/login">
                <Button
                    buttonPosition="btn-bottom"
                    buttonColors="btn-primary"
                    buttonSize="btn-large"
                    onClick=""
                    type="button"
                    name="로그인 하러가기"
                />
            </Link>
        </div>
    );
};

export default AuthorizePage;
