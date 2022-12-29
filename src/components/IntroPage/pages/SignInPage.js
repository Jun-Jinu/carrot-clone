import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../style/IntroPages.scss";

import Button from "../../utils/Button";

const SignInPage = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
        nickname: "",
    });

    return (
        <div className="page-container">
            <h2 className="top-guide">
                안녕하세요!
                <br />
                정보를 입력하고 가입해주세요
            </h2>

            <div className="text-input">
                <label htmlFor="email">이메일(ID)</label>
                <input
                    className="input-blank"
                    value={userInfo.email}
                    onChange={(e) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                    }
                    type="id"
                />
            </div>

            <div className="text-input">
                <label htmlFor="password">비밀번호(PW)</label>
                <input
                    className="input-blank"
                    value={userInfo.password}
                    onChange={(e) =>
                        setUserInfo({ ...userInfo, password: e.target.value })
                    }
                    type="password"
                />
            </div>
            <div className="text-input">
                <label htmlFor="name">이름</label>
                <input
                    className="input-blank"
                    value={userInfo.email}
                    onChange={(e) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                    }
                    type="email"
                />
            </div>

            <div className="text-input">
                <label htmlFor="phone">핸드폰번호</label>
                <input
                    className="input-blank"
                    value={userInfo.phone}
                    onChange={(e) =>
                        setUserInfo({ ...userInfo, phone: e.target.value })
                    }
                    type="phone"
                />
            </div>
            <div className="text-input">
                <label htmlFor="nickname">닉네임</label>
                <input
                    className="input-blank"
                    value={userInfo.nickname}
                    onChange={(e) =>
                        setUserInfo({ ...userInfo, nickname: e.target.value })
                    }
                    type="text"
                />
            </div>

            <Link to="/authorize">
                <Button
                    buttonPosition="btn-bottom"
                    buttonColors="btn-primary"
                    buttonSize="btn-large"
                    onClick=""
                    type="button"
                    name="가입하기"
                />
            </Link>
        </div>
    );
};

export default SignInPage;
