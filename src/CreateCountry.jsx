import React from 'react';


class CreateCountry extends React.Component {
    onInputChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }
      
      onFormSubmit = async (event) => {
        event.preventDefault()
        await fetch("http://localhost:3000/countries", {
          method: "POST",
          headers: {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(this.state)
        })
        this.props.history.push("/countries")
      }
    render() {
        return (
            <div className="CreateCountry">
                <h1>Add a Country</h1>
                <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={this.onInputChange}/>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default CreateCountry;

