import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CountriesList from './CountriesList';
import MapContainer from './MapContainer';
import Navbar from './Navbar';
import CreateCountry from './CreateCountry';
import Home from './Home';
import Login from './Login';
import SignUp from './Signup';
import ProtectedRoute from './ProtectedRoute';
import Country from './Country';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  //render() {
    return (
      <div className="App">
      <Navbar isAuth={loggedIn} />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/countries" component={CountriesList} />
        <ProtectedRoute exact path="/countries/create" component={CreateCountry} />
        <Route path="/countries/:name" render={(props) => <Country {...props} /> } />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />    
      </Switch>
      </div>
    )
  //}
}

export default App;
