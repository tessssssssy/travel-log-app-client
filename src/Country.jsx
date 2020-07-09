import React from 'react';

class Country extends React.Component {
    render() {
        return (
            <div className="Country">
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Country;