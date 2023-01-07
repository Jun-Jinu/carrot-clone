import axios from "axios";
import React from "react";

// method: GET, POST, DELETE 등 전송방식

const ServerConnection = (method, data) => {
    //axios
    const serverUrl = "http://localhost:3000/";

    const option = {
        serverUrl,
        method: method,
        header: {
            //토큰을 사용하는 코드 추가 필요
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        data: data,
        // 데이터 전송 예시
        // {
        //     name: "carrot",
        //     age: 25,
        // },
    };

    axios(option)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
