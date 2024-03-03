import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { me } from "../page-links";

export default function HomePage() {
    const { auth } = useAuth();
    console.log(auth);
    return (
        <div>
            <p>Home Page</p>
            <Link to={me}>Goto To Profile</Link>
        </div>
    );
}
