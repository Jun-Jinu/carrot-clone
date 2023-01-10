import { atom, selector } from "recoil";

export const visitState = atom({
    key: "visitState",
    default: [],
});

export const webUrlState = atom({
    key: "webUrlState",
    default: "http://",
});

export const tokenState = atom({
    key: "tokenState",
    default:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJ1c2VyX2xvZ2luX2lkIjoic2RkcyIsImlhdCI6MTY3MDk0NTgyNSwiZXhwIjoxNjczNTM3ODI1fQ.qXb6dRiKFnotbBkamaa3D9hpM0Q21vsZ10KTz3Lae3A",
});

export const getToken = selector({
    key: "getToken",
    get: ({ get }) => {
        let token = get(tokenState);
        return token;
    },
});
