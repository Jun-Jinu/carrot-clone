import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstPage from "./components/IntroPage/pages/FirstPage";
import SignInPage from "./components/IntroPage/pages/SignInPage";
import AuthorizePage from "./components/IntroPage/pages/AuthorizePage";
import LoginPage from "./components/IntroPage/pages/LoginPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FirstPage />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/authorize" element={<AuthorizePage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
