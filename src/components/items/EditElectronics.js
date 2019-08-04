import React, { Component } from 'react';
import axios from 'axios';

class EditElectronics extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: this.props.theElectronics.name,
        // weight: this.props.theElectronics.weight
    }
  }
    
  handleFormSubmit = (event) => {
    const name = this.state.name;
    // const weight =  this.state.weight;

    event.preventDefault();

    axios.post(`http://localhost:5000/api/electronics/update/${this.props.theElectronics._id}`,
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


export default EditElectronics;