import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstPage from "./components/IntroPage/pages/FirstPage";
import SignInPage from "./components/IntroPage/pages/SignInPage";
import AuthorizePage from "./components/IntroPage/pages/AuthorizePage";
import LoginPage from "./components/IntroPage/pages/LoginPage";
import HomePage from "./components/MainPage/pages/HomePage";
import ItemPage from "./components/MainPage/pages/ItemPage";
import SearchPage from "./components/MainPage/pages/SearchPage";
import CategoryPage from "./components/MainPage/pages/CategoryPage";
import SellListPage from "./components/MainPage/pages/SellListPage";
import ChattingListPage from "./components/MainPage/pages/ChattingListPage";
import LikeListPage from "./components/MainPage/pages/LikeListPage";
import NewFeedPage from "./components/MainPage/pages/NewFeedPage";
import MyProfilePage from "./components/MainPage/pages/MyProfilePage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FirstPage />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/authorize" element={<AuthorizePage />} />
                    <Route path="/login" element={<LoginPage />} />

                    <Route path="/home" element={<HomePage />} />
                    <Route path="/item" element={<ItemPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/category" element={<CategoryPage />} />
                    <Route path="/sell_list" element={<SellListPage />} />
                    <Route
                        path="/chatting_list"
                        element={<ChattingListPage />}
                    />
                    <Route path="/like_list" element={<LikeListPage />} />
                    <Route path="/new_feed" element={<NewFeedPage />} />
                    <Route path="/myprofile" element={<MyProfilePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
