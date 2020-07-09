import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Navbar = () => {  
    const history = useHistory();
    return (
    <nav>
        <Link to="/trips">Home</Link>
        <Link to="/trips/create">New</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <span
    onClick={() => {
        localStorage.removeItem("token");
        history.push("/login");
    }}
    >
    Logout
    </span>
    </nav>
    )       
}

export default Navbar;