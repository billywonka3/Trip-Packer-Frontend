import React, { Component } from 'react';
import axios from 'axios';

class EditClothing extends Component {
  constructor(props){
    super(props);
    this.state = {
        category: this.props.theClothing.category, 
        name: this.props.theClothing.name,
        // weight: this.props.theClothing.weight
    }
  }
    
  handleFormSubmit = (event) => {
    const category = this.state.category;
    const name = this.state.name;
    // const weight =  this.state.weight;

    event.preventDefault();

    axios.post(`http://localhost:5000/api/clothing/update/${this.props.theClothing._id}`,
        { theCategory: category,
          theName: name,
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
            <div>
              <input style={{padding: '5px', width: '100px', fontSize: '16px'}} type="text" 
                     name="category" value={this.state.category} onChange={this.handleChange}/>
              <input name="name" value={this.state.name} onChange={this.handleChange} />
              <br/>
              <input type="submit" value="Submit" />
            </div>
        </form>
      </div>
    )
  }
}


export default EditClothing;