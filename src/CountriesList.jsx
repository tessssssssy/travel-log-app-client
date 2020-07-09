import React, { Component } from 'react';
import MapContainer from './MapContainer';
import './CountriesList.css';
import { Link } from 'react-router-dom';


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
        console.log(this.state.data)
        const userCountries = []
        for (let i = 0; i < this.state.data.length; i++){
            countries.forEach(country => {
                if (this.state.data[i].name === country.name) {
                    userCountries.push(this.state.data[i])
                }
            })
        }
        this.setState({ countries: userCountries })
        console.log(this.state.countries)
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
            <div class="CountriesList">
            <h1>All the places I've been</h1>
            <div className="main-container">
            <MapContainer countries={this.state.countries}/>
                <div class="box"></div>
                <div className="list">
                    <h3>Countries</h3>
                    <div className="countries-list">
                    {this.state.countries.map((country) => (
                    <Link className="list-item" to={`/countries/${country.name}`}>{country.name}</Link>
                    //:<img src={country.flag} style={{width: "20px"}}/>
                    ))}
                    </div>
                </div>  
            </div>          
        </div>
        )
    }
}

export default CountriesList;