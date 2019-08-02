import React, { Component } from 'react';
import axios from 'axios';

import AddItem from '../items/AddItem.js';
import EditItem from '../items/EditItem.js';


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

        const theActualTrip = allTheTrips.find((eachTrip)=>{
            return eachTrip._id === theID
        })

        const showItems = () =>{
            return theActualTrip.items.map((eachItem, index)=>{
                console.log(eachItem)
                if(this.state.editing !== index)
                    return ( <li key={eachItem._id}>
                                <h4>{eachItem.subcategory}</h4>
                                <h6>{eachItem.name}</h6>
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
                   <script type='text/javascript' src="https://darksky.net/widget/default/25.7743,-80.1937/us12/en.js?width=100%&height=350&title=Miami, Florida&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes"></script>
                   <div style={{float: 'left'}}>
                        <h2>
                            {theActualTrip.title}
                        </h2>
                        
                        <h3>
                            {theActualTrip.description}
                        </h3>

                        {theActualTrip.items.length > 0 && 
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