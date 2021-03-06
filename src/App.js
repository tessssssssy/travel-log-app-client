
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import CountriesList from './CountriesList';
// import MapContainer from './MapContainer';
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
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/countries" component={CountriesList} />
        <ProtectedRoute exact path="/countries/create" component={CreateCountry} />
        <Route exact path="/countries/:name" component={Country}/>
        <Route exact path="/login" render={(props) => <Login {...props} setLoggedIn={setLoggedIn}/> } />
        <Route exact path="/sign-up" render={(props)=> <SignUp {...props} setLoggedIn={setLoggedIn}/>} />    
      </Switch>
      </div>
    )
  //}
}

export default App;


