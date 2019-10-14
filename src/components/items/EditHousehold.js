import React, { Component } from 'react';
import axios from 'axios';

class EditHousehold extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: this.props.theHousehold.name,
    }
  }
    
  handleFormSubmit = (event) => {
    const name = this.state.name;
    // const weight =  this.state.weight;

    event.preventDefault();

    axios.post(`http://localhost:5000/api/household/update/${this.props.theHousehold._id}`,
        { theName: name,
          // theweight: weight,
         })
    .then( () => {
        this.props.getAllTheTripsInAppJS();
        this.props.resetEditingSituation();
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
            <input name="name" value={this.state.name} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default EditHousehold;