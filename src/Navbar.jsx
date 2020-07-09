import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Navbar = () => {  
    const history = useHistory();
    console.log(localStorage.getItem('token'))
    return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/countries/create">New</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {localStorage.getItem('token') &&
        <span
        onClick={() => {
            localStorage.removeItem("token");
            history.push("/login");
        }}
        >
        Logout
    </span> 
        }
    </nav>
    )       
}

export default Navbar;