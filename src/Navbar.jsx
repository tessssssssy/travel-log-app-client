import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: localStorage.getItem("token") };
  }

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <nav>
        <Link to="/">Home</Link>
        {loggedIn ? (
          <>
            <Link to="/countries/create">New</Link>
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
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Sign Up</Link>
          </>
        )}
      </nav>
    );
  }
}

export default Navbar;
