import React from 'react';

class Country extends React.Component {
    
    render() {
    const style = {
        marginLeft: '20px',
        marginTop: '20px',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '10px',
        display: 'inline-block'
    }
     const country = this.props.location.state.filter(c => c.name === this.props.location.pathname.split('/')[2])[0]
        console.log(this.props.location.state)
        console.log(this.props.location.pathname.split('/')[2])
        return (
            <div className="Country" style={style}>
                <h2>{country.name}</h2>
                <p>Region: {country.region}</p>
                <p>Capital City: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Flag: <img style={{width: '50px'}} src={country.flag}/></p>
            </div>
        )
    }
}

export default Country;