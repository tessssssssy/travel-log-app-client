import React, { Component } from 'react';
import MapContainer from './MapContainer';
import './CountriesList.css';

class CountriesList extends Component {
    state = { 
        data: [],
        input: '',
        countries: []
     }

    async componentDidMount() {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const countries = await response.json();
        this.setState({ data: countries })
    }

    onFormSubmit = (evt) => {
        evt.preventDefault();
        const search = this.state.input
        console.log(search)
        console.log(this.state.data)
        const newCountry = this.state.data.filter(country => country.name === search )[0]
        console.log(newCountry)
        this.setState(previousState => ({
            countries: [...previousState.countries, newCountry]
        }));
    }
    onInputChange = (evt) => {
        this.setState({input: evt.target.value})
    }

    render() {
        return (
            <div class="CountriesList">
            <div>
                <MapContainer countries={this.state.countries}/>
            </div>
            <div className="list">
                {this.state.data.map((country) => (
                <p>{country.name}:<img src={country.flag} style={{width: "20px"}}/></p>
                ))}
                <form onSubmit={this.onFormSubmit}>
                <label>Add Country</label>
                <input onChange={this.onInputChange} type="text"></input>
                <input type="submit"></input>
            </form>
            </div>
            
            </div>
        )
    }
}

export default CountriesList;