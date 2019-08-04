import React, { Component } from 'react';
import axios from 'axios';


class AddToiletries extends Component {
  constructor(props){
      super(props);
      this.state = { 
        newCategory: "", 
        newName: "",
        // newWeight: "",
      };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/toiletries", {
        theName: this.state.newName,
        // theWeight: this.state.newWeight,
        theTrip: this.props.theTripToAddToiletriesTo
      })
    .then( () => {
        this.props.getData();
        // this function updates the list in TripIndex.js
        this.setState({
          newCategory: "", 
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
        <label> Category: </label>
          <br/>
          <input type="text" name="newCategory" value={this.state.newCategory} onChange={this.handleChange}/>
          <br/>
          <label> Toiletries Name: </label>
          <br/>
          <textarea name="newName" value={this.state.newName} onChange={this.handleChange} />
          <br/>

          {/* <label> Weight: </label>
          <textarea name="newWeight" value={this.state.newWeight} onChange={this.handleChange} />
          <br/> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default AddToiletries;