import React from 'react';
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

class App extends React.Component {
  render() {
    return (
      <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/countries" component={CountriesList} />
        <Route exact path="/countries/create" component={CreateCountry} />  
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />    
      </Switch>
      </>
    )
  }
}

export default App;
