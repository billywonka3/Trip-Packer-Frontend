import React, { Component } from 'react';
import axios from 'axios';

class EditProject extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.theProject.title, 
    }
  }

    
  handleFormSubmit = (event) => {
    const title = this.state.title;

    event.preventDefault();

    axios.post(`http://localhost:5000/api/projects/update/${this.props.theProject._id}`,
     { theTitle: title})
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
                <input style={{padding: '5px', fontSize: '20px', margin: '5px'}} type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
            </div>
          
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditProject;