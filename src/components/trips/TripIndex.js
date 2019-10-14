import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './tripindex.css';

import AddTrip from '../trips/AddTrip.js';
import EditTrip from '../trips/EditTrip.js';


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
        axios.delete(`http://localhost:5000/api/trips/${idOfTrip}`)
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

        const myTrips = this.props.allTheTrips.filter((eachTrip)=>{
            return eachTrip.owner === this.props.theUser._id;
        })

        return myTrips.map((trip, index) => {
            if(this.state.editing !== index){
                return (
                    <div key={trip._id} className="trip-box1">
                        <Link to={`/trips/${trip._id}`}>
                            <h3>{trip.title}</h3>
                        </Link>
                        <p style={{maxWidth: '400px'}}> {trip.description} </p>

                        <button onClick={()=>{this.changeEditing(index)}}> Edit </button>
                        <button onClick = {()=>{this.deleteTrip(trip._id)}}> Delete </button>
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
                <div className="trip-main">
                    <div>
                        <div className="trip-column">
                            {this.showTrips()}
                            <div className="trip-box2">
                                <h4><i>Let's start by creating a Trip</i></h4>
                                <AddTrip getData={this.props.getData}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        else
            return(<h3>loading...</h3>)
    }
}


export default TripIndex;