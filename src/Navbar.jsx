import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {
    // state = { currentUser : localStorage.getItem('token') }
    render() {
        return (
            <nav className="Navbar">
                <Link className="nav-link" to="/countries">Home</Link>
                <Link className="nav-link" to="/countries/create">Add Country</Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/signup">Sign Up</Link>
                {this.props.isAuth &&
                <span className="nav-link"
                onClick={() => {
                    localStorage.removeItem("token");
                    console.log(this.props.isAuth)
                    // this.props.history.push("/login");
                    this.setState({currentUser: null})
                }}
                >
                Logout
            </span> 
                }
            </nav>
            )      
    } 
}

export default Navbar;