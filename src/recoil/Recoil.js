import { atom, selector } from "recoil";

export const visitState = atom({
    key: "visitState",
    default: [],
});

export const webUrlState = atom({
    key: "webUrlState",
    default: "http://3.35.176.110:8080/",
});

// export const getToken = selector({
//     key: "getToken",
//     get: ({ get }) => {
//         let token = get(tokenState);
//         return token;
//     },
// });
