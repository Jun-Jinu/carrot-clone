import "./styles/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
    FirstPage,
    LoginPage,
    SignInPage,
    AuthorizePage,
} from "./IntroPages/pages";

import {
    CategoryPage,
    HomePage,
    HomePage2,
    SearchPage,
} from "./MainPages/pages";

import {
    ChatPage,
    ChattingListPage,
    ItemPage,
    ItemSellPage,
    LikeListPage,
    MyProfilePage,
    MySellListPage,
    NewFeedPage,
    UserSellList,
} from "./FuntionPages/Pages";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FirstPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/authorize" element={<AuthorizePage />} />

                    <Route path="/category" element={<CategoryPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/mycarrot" element={<HomePage2 />} />
                    <Route path="/search" element={<SearchPage />} />

                    <Route path="/chatting" element={<ChatPage />} />
                    <Route
                        path="/chatting_list"
                        element={<ChattingListPage />}
                    />
                    <Route path="/item" element={<ItemPage />} />
                    <Route path="/item_selling" element={<ItemSellPage />} />
                    <Route path="/like_list" element={<LikeListPage />} />
                    <Route path="/myprofile" element={<MyProfilePage />} />
                    <Route path="/my_sell_list" element={<MySellListPage />} />
                    <Route path="/new_feed" element={<NewFeedPage />} />
                    <Route path="/user_sell_list" element={<UserSellList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
