import axios from "axios";

// method: GET, POST, DELETE 등 전송방식

const ServerConnection = (method, data) => {
    //axios
    const serverUrl = "http://localhost:3000/";

    const ex_data = { name: "carrot", age: 25 };
    const option = {
        serverUrl,
        method: method,
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            //토큰을 사용하는 코드 추가 필요
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

const setToken = (token_method, token) => {
    // const token_method = "토큰 저장 방식";
    // const token = "받은 토큰";

    localStorage.setItem("access_token", token_method + " " + token);
};

const getToken = () => {
    const access_token = localStorage.getItem("access_token");
    localStorage.removeItem("access_token");

    return access_token;
};
