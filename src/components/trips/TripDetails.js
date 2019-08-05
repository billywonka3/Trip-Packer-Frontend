import React, { Component } from 'react';
import axios from 'axios';
import ScriptTag from 'react-script-tag';

import './tripdetails.css';

import AddItem from '../items/AddItem.js';
import EditItem from '../items/EditItem.js';
import AddToiletries from '../items/AddToiletries.js';
import AddElectronics from '../items/AddElectronics.js';

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
    deleteToiletries = (theID) =>{
        axios.delete('http://localhost:5000/api/toiletries/'+theID)
        .then(()=>{
            this.props.getData();
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    deleteElectronics = (theID) =>{
        axios.delete('http://localhost:5000/api/electronics/'+theID)
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

        const theActualTrip = allTheTrips.find((eachTrip)=>{
            return eachTrip._id === theID
        })

        const showItems = () =>{
            return theActualTrip.items.map((eachItem, index)=>{
                // console.log(eachItem)
                if(this.state.editing !== index)
                    return ( <li key={eachItem._id}>
                                <h4>{eachItem.category}</h4>
                                <h6>{eachItem.name}</h6>
                                <button onClick = {()=>{this.edit(index)}}>Edit</button>
                                <button onClick = {()=>{this.deleteItem(eachItem._id)}}>Delete</button>
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

        const showToiletries = () =>{
            return theActualTrip.toiletries.map((eachToiletries)=>{
                console.log(eachToiletries)
                return ( <li key={eachToiletries._id}>
                            <h6>{eachToiletries.name}</h6>
                            <button onClick = {()=>{this.deleteToiletries(eachToiletries._id)}}>Delete</button>
                        </li>
                )
            })  
        }

        const showElectronics = () =>{
            return theActualTrip.electronics.map((eachElectronics)=>{
                console.log(eachElectronics)
                return ( <li key={eachElectronics._id}>
                            <h6>{eachElectronics.name}</h6>
                            <button onClick = {()=>{this.deleteElectronics(eachElectronics._id)}}>Delete</button>
                        </li>
                )
            })  
        }

        if(this.props.ready)
            return(
                <div style={{paddingTop: '20px'}}>
                    <div className="center">
                        <div className = "trip-details">
                            <span>
                                <h2> {theActualTrip.title} </h2>
                                <h5> {theActualTrip.description} </h5>
                            </span>
                        </div>
                    </div>

                    <hr />

                    <div className = "weatherbar" >
                        {/* <form id="gmaps" method="post" onsubmit="return false">
                            <p>
                                <span>Location</span>
                                <span><input id="location" type="text" placeholder="Address" value="Boston, MA"></span>
                            </p>
                            <p class="coords-input">
                                <span>Latitude</span>
                                <span><input id="latitude" type="text" placeholder="Lat"></span>
                            </p>
                            <p class="coords-input">
                                <span>Longitude</span>
                                <span><input id="longitude" type="text" placeholder="Lng"></span>
                            </p>
                        </form> */}
                        <ScriptTag 
                            isHydrating={true}
                            type='text/javascript' 
                            src='https://darksky.net/widget/default/25.7743,-80.1937/us12/en.js?width=100%&height=350&title=Miami, Florida&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'
                        />;
                    </div>

                    <hr />

                    <div className="item-columns">
                        <div className= "clothing">
                            <h3>Clothing</h3>
                            <div>
                                <hr />
                                {theActualTrip.items.length > 0 && 
                                    <ul className= "list-format">
                                        {showItems()}
                                    </ul>                           
                                }
                                <hr /> 
                            </div>     
                            <div className="add-item"> 
                                <AddItem 
                                    theTripToAddItemsTo = {theActualTrip._id} 
                                    getData = {this.props.getData}
                                />
                            </div>
                        </div>

                        <div className= "toiletries">
                            <h3>Toiletries</h3>
                            <div>
                                <hr />
                                {theActualTrip.toiletries.length > 0 && 
                                    <ul>
                                        {showToiletries()}
                                    </ul>                           
                                }
                                <hr /> 
                            </div>
                            <div className= "add-item">
                                <AddToiletries 
                                    theTripToAddToiletriesTo = {theActualTrip._id} 
                                    getData = {this.props.getData}
                                />
                            </div>
                        </div>

                        <div className= "electronics">
                            <h3>Electronics</h3>
                            <div>
                                <hr /> 
                                {theActualTrip.electronics.length > 0 && 
                                    <ul>
                                        {showElectronics()}
                                    </ul>                           
                                }
                                <hr /> 
                            </div> 
                            <div className= "add-item">
                                <AddElectronics 
                                    theTripToAddElectronicsTo = {theActualTrip._id} 
                                    getData = {this.props.getData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        else // Loading Icon & Msg
            return(<h3>Loading...</h3>)
    }
}


export default TripDetails;