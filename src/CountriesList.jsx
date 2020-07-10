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
        this.setState({ data: countries });
        this.getUserCountries()
    }

    getUserCountries = async () => {
        const response = await fetch('http://localhost:3000/countries', {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }});
        const countries = await response.json();
        const userCountries = []
        for (let i = 0; i < this.state.data.length; i++){
            countries.forEach(country => {
                if (this.state.data[i].name === country.name) {
                    userCountries.push(this.state.data[i])
                }
            })
        }
        this.setState({ countries: userCountries })
    }

    // onFormSubmit = (evt) => {
    //     evt.preventDefault();
    //     const search = this.state.input
    //     console.log(search)
    //     console.log(this.state.data)
    //     const newCountry = this.state.data.filter(country => country.name === search )[0]
    //     console.log(newCountry)
    //     this.setState(previousState => ({
    //         countries: [...previousState.countries, newCountry]
    //     }));
    // }
    render() {
        return (
            <div className="CountriesList">
            <div>
                <MapContainer countries={this.state.countries}/>
            </div>
            <div className="list">
                {this.state.countries.map((country, index) => (
                <p key={index}>{country.name}:<img src={country.flag} alt='map' style={{width: "20px"}}/></p>
                ))}
            </div>            
        </div>
        )
    }
}

export default CountriesList;