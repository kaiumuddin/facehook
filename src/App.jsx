import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import { register, me, login, home, notFound } from "./page-links";
import PrivateRoutes from "./routes/PrivateRoutes";

export default function App() {
    return (
        <>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path={home} element={<HomePage />} exact />
                    <Route path={me} element={<ProfilePage />} />
                </Route>
                <Route path={login} element={<LoginPage />} />
                <Route path={register} element={<RegistrationPage />} />
                <Route path={notFound} element={<NotFoundPage />} />
            </Routes>
        </>
    );
}
