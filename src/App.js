import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstPage from "./components/IntroPage/pages/FirstPage";
import SignInPage from "./components/IntroPage/pages/SignInPage";
import AuthorizePage from "./components/IntroPage/pages/AuthorizePage";
import LoginPage from "./components/IntroPage/pages/LoginPage";
import HomePage from "./components/MainPage/pages/HomePage";
import SearchPage from "./components/MainPage/pages/SearchPage";
import CategoryPage from "./components/MainPage/pages/CategoryPage";
import SellListPage from "./components/MainPage/pages/SellListPage";
import ChattingListPage from "./components/MainPage/pages/ChattingListPage";
import LikeListPage from "./components/MainPage/pages/LikeListPage";

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
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/category" element={<CategoryPage />} />
                    <Route path="/sell_list" element={<SellListPage />} />
                    <Route
                        path="/chatting_list"
                        element={<ChattingListPage />}
                    />
                    <Route path="/like_list" element={<LikeListPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
