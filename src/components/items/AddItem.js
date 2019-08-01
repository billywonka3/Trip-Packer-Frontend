import React, { Component } from 'react';
import axios from 'axios';


class AddItem extends Component {
  constructor(props){
      super(props);
      this.state = { newSubcategory: "", newName: "" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/items", {
        theSubcategory: this.state.newSubcategory,
        theName: this.state.newName,
        theWeight: this.state.newWeight,
        theProject: this.props.theProjectToAddItemsTo
      })
    .then( () => {
        this.props.getData();
        // this function updates the list in ProjectIndex.js
        this.setState({newSubcategory: "", newName: ""});
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
          <label> Subcategory: </label>
          <input type="text" name="newSubcategory" value={this.state.newSubcategory} onChange={this.handleChange}/>

          <label> Name: </label>
          <textarea name="newName" value={this.state.newName} onChange={this.handleChange} />
          
          <label> Weight: </label>
          <textarea name="newWeight" value={this.state.newWeight} onChange={this.handleChange} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default AddItem;