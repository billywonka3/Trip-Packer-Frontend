import React, { Component } from 'react';
import axios from 'axios';


class AddTrip extends Component {
  constructor(props){
    super(props);
    this.state = { newTitle: "", newDescription: "" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/trips", {
       theTitle: this.state.newTitle,
       theDescription: this.state.newDescription
      }, {withCredentials: true })
    .then( () => {
        this.props.getData();
        // this function updates the list in TripIndex.js
        this.setState({newTitle: "", newDescription: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div className="add-trip">
        <form onSubmit={this.handleFormSubmit}>
          <label>Where are you going?:</label>
          <br/>
          <input type="text" name="newTitle" value={this.state.newTitle} onChange={ e => this.handleChange(e)}/>
          <br/>
          <label>Add a brief Description:</label>
          <br/>
          <textarea name="newDescription" value={this.state.newDescription} onChange={ e => this.handleChange(e)} />
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default AddTrip;