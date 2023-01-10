import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useRecoilValue } from "recoil";
import { webUrlState } from "../../recoil/Recoil";

import "../styles/IntroPages.scss";

import Button from "../../components/utils/Button";

const SignInPage = () => {
    const url = useRecoilValue(webUrlState);

    const [userInfo, setUserInfo] = useState({
        email: "",
        pw: "",
        name: "",
        phone: "",
        nickName: "",
    });

    const signUp = () => {
        axios
            .post(
                url + "api/user/signup",
                userInfo
                // {
                //     email: "1",
                //     pw: "1",
                //     name: "1",
                //     phone: "1",
                //     nickName: "12",
                // }
            )
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    };
    // const signUp = () => {
    //     axios
    //         .post("http://52.231.107.168:3000/api/v1/website", frm, {
    //             headers: {
    //                 //Authorization: `Bearer ${}`,
    //             },
    //         })
    //         .then((data) => console.log(data))
    //         .catch((err) => console.log(err));
    // };

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
