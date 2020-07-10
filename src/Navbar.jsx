
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
// import { useHistory } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: localStorage.getItem("token") };
  }

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <nav className='Navbar'>
        <Link className="nav-link" to="/">Home</Link>
        {loggedIn ? (
          <>
            <Link className="nav-link" to="/countries/create">Add Country</Link>
            <Link
              to="/"
              onClick={() => {
                localStorage.removeItem("token");
                this.props.setLoggedIn(null)
              }}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/sign-up">Sign Up</Link>
          </>
        )}
      </nav>
    );
  }
}

export default Navbar;
