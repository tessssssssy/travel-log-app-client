import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

class Navbar extends React.Component {
    // state = { currentUser : localStorage.getItem('token') }
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/countries/create">New</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {this.props.isAuth &&
                <span
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