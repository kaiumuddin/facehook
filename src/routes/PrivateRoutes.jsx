import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";
import { login } from "../page-links";
import Header from "../components/common/Header";

export default function PrivateRoutes() {
    const { auth } = useAuth();

    return (
        <>
            <Header />
            {auth?.user ? (
                <main className="mx-auto max-w-[1020px] py-8">
                    <div className="container">
                        <Outlet />
                    </div>
                </main>
            ) : (
                <Navigate to={login} />
            )}
        </>
    );
}
