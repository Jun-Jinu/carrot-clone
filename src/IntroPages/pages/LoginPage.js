import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { webUrlState, loginUserState } from "../../recoil/Recoil";

import "../styles/IntroPages.scss";

import Button from "../../components/utils/Button";

const LoginPage = () => {
    const url = useRecoilValue(webUrlState);
    const setLoginUser = useSetRecoilState(loginUserState);

    const navigate = useNavigate();

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        pw: "",
    });

    const loginAxios = () => {
        axios
            .post(url + "api/user/login", loginInfo)
            .then((res) => {
                if (res.data.success === true) {
                    let userData = res.data.data;
                    // 로그인 성공시
                    localStorage.setItem("access_token", userData.accessToken);
                    setLoginUser({
                        nickName: userData.nickName,
                        userId: userData.userId,
                    });

                    // console.log(res);
                    navigate("/home");
                } else {
                    // 신호 성공, 로그인 정보 불일치
                    alert("이메일 및 비밀번호가 올바르지 않습니다");
                }
            })
            .catch((err) => {
                console.log(err);
                alert("예기치못한 오류가 발생했습니다");
            });
    };

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
                <label htmlFor="pw">비밀번호(PW)</label>
                <input
                    className="input-blank"
                    onChange={(e) =>
                        setLoginInfo({ ...loginInfo, pw: e.target.value })
                    }
                    type="password"
                />
            </div>

            <Button
                buttonPosition="btn-bottom"
                buttonColors="btn-primary"
                buttonSize="btn-large"
                onClick={loginAxios}
                type="button"
                name="로그인"
            />

            <div className="position-bottom">
                <span>비밀번호를 잊어버리셨나요?</span>
                <br />
                <span className="color-primary">비밀번호 찾기</span>
            </div>
        </div>
    );
};

export default LoginPage;
