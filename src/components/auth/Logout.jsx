import React from "react";
import LogoutIcon from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";
import { login } from "../../page-links";

export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate(login);
    };

    return (
        <button className="icon-btn" onClick={handleLogout}>
            <img src={LogoutIcon} alt="Logout" />
        </button>
    );
}
