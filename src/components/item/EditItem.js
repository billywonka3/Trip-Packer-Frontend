import React, { Component } from 'react';
import axios from 'axios';

class EditItem extends Component {
  constructor(props){
    super(props);
    this.state = {
        subcategory: this.props.theItem.subcategory, 
        name: this.props.theItem.name
        weight: this.props.theItem.weight
    }
  }
    
  handleFormSubmit = (event) => {
    const subcategory = this.state.subcategory;
    const name = this.state.name;
    const weight =  this.state.weight

    event.preventDefault();

    axios.post(`http://localhost:5000/api/items/update/${this.props.theItem._id}`,
        { thesubcategory: subcategory,
          thename: name,
          theweight: weight,
         })
    .then( () => {
        this.props.getAllTheProjectsInAppJS();
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
                <input style={{padding: '5px', fontSize: '20px', margin: '5px'}} type="text" name="subcategory" value={this.state.subcategory} onChange={this.handleChange}/>
            </div>
         
            <input name="name" value={this.state.name} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default EditItem;