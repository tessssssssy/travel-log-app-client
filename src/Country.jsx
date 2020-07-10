import React from 'react';

class Country extends React.Component {  
    render() {
        console.log(this.props)
        return (
            <div className="Country">
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Country;