import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddTrip from '../trip/AddTrip.js';
import EditTrip from '../trip/EditTrip.js';


class TripIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false,
        }
    }

    changeEditing = (whichNumber) => {
        this.setState({editing: whichNumber})
    } 

    resetEdit = () =>{
        this.setState({editing: false})
    }

    deleteTrip = (idOfTrip) =>{
        axios.delete(`http://localhost:5000/api/trip/${idOfTrip}`)
        .then(()=>{
            this.props.getData();
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    showTrips = () =>{
        if(!this.props.theUser){
            this.props.history.push('/')
            return;
        }

        const myTrips = this.props.allTheTrips.filter((eachP)=>{
            return eachP.owner === this.props.theUser._id;
        })

        return myTrips.map((trip, index) => {
            if(this.state.editing !== index){
                return (
                    <div key={trip._id}>
                        <Link to={`/trips/${trip._id}`}>
                            <h3>{trip.title}</h3>
                        </Link>
                        <p style={{maxWidth: '400px'}} >{trip.description} </p>

                        <button onClick={()=>{this.changeEditing(index)}} >Edit This Trip</button>
                        <button onClick = {()=>{this.deleteTrip(trip._id)}} >Delete This Trip</button>
                    </div>
                )
            } else {
                return(
                    <EditTrip 
                        resetEditingSituation = {this.resetEdit} 
                        theTrip = {trip}
                        getAllTheTripsInAppJS = {this.props.getData}
                    />
                )
            }
        })    
    }

    render(){
        if(this.props.ready)
            return(
                <div>
                    <div style={{width: '60%', float:"left"}}>
                    {this.showTrips()}
                    </div>
                    <div style={{width: '40%', float:"right"}}>
                        <AddTrip getData={this.props.getData}/>
                    </div>
                </div>
            )
        else
            return(<h3>loading...</h3>)
    }
}


export default TripIndex;