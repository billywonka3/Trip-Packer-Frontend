import React from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';

import CategoryIndex from './components/category/CategoryIndex.js'
import CategoryDetails from './components/category/CategoryDetails';

import Signup from './components/Signup.js';
import Login from './components/Login.js';
import AuthService from './services/AuthService.js';

import Navbar from './components/Navbar.js'

import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      listOfCategories: [],
      currentlyLoggedIn: null,
      ready: false,
      signupShowing: false,
      loginShowing: false,
    };

    this.service = new AuthService();
  }

  getAllCategories = () => {
    axios.get(`http://localhost:5000/api/categories`, {withCredentials: true})
    .then(responseFromApi => {
      this.setState({
        listOfCategories: responseFromApi.data, ready: true
      })
    })
  }

  getCurrentlyLoggedInUser = () =>{
    this.service.currentUser()
    .then((theUser)=>{
      this.setState({currentlyLoggedIn: theUser})
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
      this.getAllCategories();
      this.getCurrentlyLoggedInUser();
  }

  render(){
    console.log('=-=-=-=-=-=-=-',this.state);

    return (
      <div>
        <Navbar 
        theUser = {this.state.currentlyLoggedIn} 
        pleaseLogOut = {()=> this.service.logout()}
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
          <Route exact path="/categories" render ={(props)=> <CategoryIndex
          {...props} 
          theUser = {this.state.currentlyLoggedIn} 
          allTheCategories ={this.state.listOfCategories}
          getData = {this.getAllCategories}
          ready = {this.state.ready}
          theUser = {this.state.currentlyLoggedIn}
          />} />

          <Route exact path="/categories/:theID" render ={(props)=> <CategoryDetails
          {...props} 
          allTheCategories ={this.state.listOfCategories}
          ready = {this.state.ready}
          getData = {this.getAllCategories}
          theUser = {this.state.currentlyLoggedIn}
          />} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
