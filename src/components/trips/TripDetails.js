import React, { Component } from 'react';
import axios from 'axios';

import AddItem from '../addItem/AddItem.js';
import EditItem from '../editItem/EditItem.js';


class TripDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false,
        }
    }

    resetEdit = () =>{
        this.setState({editing: false})
    }

    edit = (whichNumber) =>{
        this.setState({editing: whichNumber})
    }

    deleteItem = (theID) =>{
        axios.delete('http://localhost:5000/api/items/'+theID)
        .then(()=>{
            this.props.getData();
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        const allTheTrips = this.props.allTheTrips;
        const theID = this.props.match.params.theID;

        const theActualTrip = allTheTrips.find((eachP)=>{
            return eachP._id === theID
        })

        const showItems = () =>{
            return theActualTrip.Items.map((eachItem, index)=>{
                if(this.state.editing !== index)
                    return ( <li key={eachItem._id}>
                                <h4>{eachItem.title}</h4>
                                <button onClick = {()=>{this.edit(index)}}>Edit This Item</button>
                                <button onClick = {()=>{this.deleteItem(eachItem._id)}}>Delete This Item</button>
                            </li>
                    )
                else
                    return(
                        <EditItem
                        theItem ={eachItem}
                        getAllTheTripsInAppJS = {this.props.getData}
                        resetEditingSituation = {this.resetEdit}
                        />
                    )
            })  
        }

        if(this.props.ready)
            return(
                <div style={{paddingTop: '100px'}}>
                    <div style={{float: 'left'}}>
                        <h2>
                            {theActualTrip.title}
                        </h2>            

                        {theActualTrip.Items.length > 0 && 
                            <ul>
                                <h3>Items For This Trip</h3>
                                <hr />
                                {showItems()}
                            </ul>
                        }
                    </div>

                    <div className="right-side-column" style={{float: 'right'}}>
                        <AddItem 
                        theTripToAddItemsTo = {theActualTrip._id} 
                        getData = {this.props.getData}
                        />
                    </div>
                </div>
            )
        else
            return(<h3>Loading...</h3>)
    }
}


export default TripDetails;