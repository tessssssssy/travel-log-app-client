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
    getCountries = async () => {
        const response = await fetch('http://localhost:3000/countries', {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }});
        const countries = await response.json();
        return countries
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
    deleteCountry = async (name) => {
        const countries = await this.getCountries();
        console.log(countries)
        const deletedCountry = countries.filter(country => country.name === name)[0]
        console.log(deletedCountry)
        await fetch(`http://localhost:3000/countries/${deletedCountry.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })

        this.getUserCountries()
      }
    render() {
        return (
            <div className="CountriesList">
            <h1>All the places I've been</h1>
            <div className="main-container">
            <MapContainer countries={this.state.countries}/>
                {/* <div class="box"></div> */}
                <div className="list">
                    <h3>Countries</h3>
                    <div className="countries-list">
                    {this.state.countries.map((country, index) => (
                        <div className="link-container">
                            <Link key={index} className="list-item" to={{pathname: `/countries/${country.name}`, state: this.state.data}}>{country.name}:<img src={country.flag} style={{width: "20px"}}/></Link>
                            <button onClick={() => this.deleteCountry(country.name)}>Delete</button>
                        </div>                   
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