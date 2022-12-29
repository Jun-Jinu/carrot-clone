import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../style/IntroPages.scss";

import Button from "../../utils/Button";

const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });

    return (
        <div className="page-container">
            <h2 className="top-guide">
                안녕하세요!
                <br />
                이메일로 로그인해주세요
            </h2>

            <div className="text-input">
                <label htmlFor="email">이메일(ID)</label>
                <input
                    className="input-blank"
                    value={loginInfo.email}
                    onChange={(e) =>
                        setLoginInfo({ ...loginInfo, email: e.target.value })
                    }
                    type="id"
                />
            </div>

            <div className="text-input">
                <label htmlFor="password">비밀번호(PW)</label>
                <input
                    className="input-blank"
                    onChange={(e) =>
                        setLoginInfo({ ...loginInfo, password: e.target.value })
                    }
                    type="password"
                />
            </div>

            <Link to="/signin">
                <Button
                    buttonPosition="btn-bottom"
                    buttonColors="btn-primary"
                    buttonSize="btn-large"
                    onClick="#"
                    type="button"
                    name="로그인"
                />
            </Link>

            <div className="position-bottom">
                <span>비밀번호를 잊어버리셨나요?</span>
                <br />
                <span className="color-primary">비밀번호 찾기</span>
            </div>
        </div>
    );
};

export default LoginPage;
