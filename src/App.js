import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import TripIndex from './components/trips/TripIndex.js'
import TripDetails from './components/trips/TripDetails';

import Signup from './components/Signup.js';
import Login from './components/Login.js';
// import AuthService from './services/AuthService.js';

import Navbar from './components/Navbar.js'

import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listOfTrips: [],
      currentlyLoggedIn: null,
      ready: false,
      signupShowing: false,
      loginShowing: false,
    };

    // this.service = new AuthService();
  }

  getGeocodeKey = () => {
    // axios.get(`http://localhost:5000/api/geocode`, {withCredentials: true})
    // .then(responseFromApi => {
    //   this.setState({
    //     listOfTrips: responseFromApi.data, ready: true
    //   })
    // })
  }

  getAllTrips = () => {
    axios.get(`http://localhost:5000/api/trips`, {withCredentials: true})
    .then(responseFromApi => {
      this.setState({
        listOfTrips: responseFromApi.data, ready: true
      })
    })
  }

  getCurrentlyLoggedInUser = () =>{
    // this.service.currentUser()
    axios.get('http://localhost:5000/api/auth/getcurrentuser', {withCredentials: true})
    .then((response)=>{
      // console.log('fetching the user now')
      let theUser = response.data;
      this.setState({currentlyLoggedIn: theUser})
      return theUser;
    })
    .catch(()=>{
      this.setState({currentlyLoggedIn: null})
    })
  }

  toggleForm = (whichForm) =>{
    let theForm;

    if(whichForm === "signup"){
      theForm = 'signupShowing'
    } else {
      theForm = 'loginShowing'
    }
    this.setState({[theForm]: !this.state[theForm]})
  }

  componentDidMount() {
      this.getAllTrips();
      this.getCurrentlyLoggedInUser();
      this.getGeocodeKey();
  }

  logout = () =>{
    axios.post('http://localhost:5000/api/auth/logout', {}, {withCredentials: true})
    .then((response)=>{
      console.log(response);
      this.getCurrentlyLoggedInUser();  
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render(){
    console.log('=-=-=-=-=-=-=-',this.state);

    return (
      <div>
        <Navbar 
          theUser = {this.state.currentlyLoggedIn} 
          // pleaseLogOut = {()=> this.service.logout()}
          pleaseLogOut = {this.logout}
          toggleForm = {this.toggleForm}
          getUser = {this.getCurrentlyLoggedInUser}
        />

        {this.state.signupShowing && 
          <Signup getUser = {this.getCurrentlyLoggedInUser}
            toggleForm = {this.toggleForm}
          />
        }

        {this.state.loginShowing && 
          <Login getUser = {this.getCurrentlyLoggedInUser}
            toggleForm = {this.toggleForm}
          />
        }

        <Switch>
          <Route exact path="/api/trips" render ={(props)=> <TripIndex
            {...props} 
            theUser = {this.state.currentlyLoggedIn} 
            allTheTrips ={this.state.listOfTrips}
            getData = {this.getAllTrips}
            ready = {this.state.ready}
            theUser = {this.state.currentlyLoggedIn}
          />} />

          <Route exact path="/api/trips/:theID" render ={(props)=> <TripDetails
            {...props} 
            allTheTrips ={this.state.listOfTrips}
            ready = {this.state.ready}
            getData = {this.getAllTrips}
            theUser = {this.state.currentlyLoggedIn}
          />} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
