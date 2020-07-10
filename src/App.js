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

class App extends React.Component {
  state = { data: [] }
  async componentDidMount() {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await response.json();
    this.setState({ data: countries });
  }
  render() {
    return (
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/countries" component={CountriesList} />
        <ProtectedRoute exact path="/countries/create" component={CreateCountry} />
        <Route path="/countries/:name" render={(props) => <Country data={this.state.data} {...props} /> } />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />    
      </Switch>
      </div>
    )
  }
}

export default App;
