import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav>
            <NavLink to="/" className={({isActive}) => (isActive ? "active":"")}>Home</NavLink>
            <NavLink to="/artists" className={({isActive}) => (isActive ? "active":"")}>Artists</NavLink>
            
        </nav>
       
    )
}

export default Header;