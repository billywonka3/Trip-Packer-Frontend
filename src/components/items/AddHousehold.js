import React, { Component } from 'react';
import axios from 'axios';


class AddHousehold extends Component {
  constructor(props){
      super(props);
      this.state = { 
        newName: "",
        // newWeight: "",
      };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/household", {
        theName: this.state.newName,
        // theWeight: this.state.newWeight,
        theTrip: this.props.theTripToAddHouseholdTo
      })
    .then( () => {
        this.props.getData();
        // this function updates the list in TripIndex.js
        this.setState({
          newName: "", 
          // newWeight: ""
        });
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label> Add Home Prep Task : </label>
          <br/>
          <input type="text" name="newName" value={this.state.newName} onChange={this.handleChange} />
          <br/>

          {/* <label> Weight: </label>
          <textarea name="newWeight" value={this.state.newWeight} onChange={this.handleChange} />
          <br/> */}
          <input type="submit" value="Add to List" />
        </form>
      </div>
    )
  }
}


export default AddHousehold;