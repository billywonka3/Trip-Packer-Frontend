import React, { Component } from 'react';
import axios from 'axios';

class EditTrip extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.theTrip.title, 
        description: this.props.theTrip.description
    }
  }

    
  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;

    event.preventDefault();

    axios.post(`http://localhost:5000/api/trips/update/${this.props.theTrip._id}`,
     { theTitle: title, theDescription: description })
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
      <div style= {{marginTop: '22.5px'}}>   
        <form onSubmit={this.handleFormSubmit} style={{margin: '5px', padding: '5px'}} >
            <div>
              <input style={{fontSize: '20px'}} type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
            </div>
            <div>
              <textarea name="description" value={this.state.description} onChange={this.handleChange} />
            </div>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditTrip;