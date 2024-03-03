import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import { register, me, login } from "./page-links";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path={login} element={<LoginPage />} />
                <Route path={register} element={<RegistrationPage />} />
                <Route path={me} element={<ProfilePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}
