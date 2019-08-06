import React, { Component } from 'react';
// import AuthService from '../services/AuthService';
import axios from 'axios';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { usernameInput: '', passwordInput: '' };
    // this.service = new AuthService();
  }

  handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
      // this line evaluates to {usernameInput: 'hello'}
  }

  tryToSignUp = (e) =>{
    e.preventDefault();
    const uName = this.state.usernameInput;
    const pWord = this.state.passwordInput;
    
    // this.service.signup(uName, pWord)
    axios.post('http://localhost:5000/api/auth/signup', {
      username: uName,
      password: pWord
    }, {withCredentials: true})
    .then(()=>{
      this.props.getUser();
      this.props.toggleForm('signup');
    })
  }

  hidePassword = () => {
    let x = document.getElementById("thePassword");
    x.type === "password"? x.type = "text":x.type = "password";
  } 

  
  render(){
    return(
      <form className="login-signup" onSubmit = {this.tryToSignUp}>

        <h2>Sign Up</h2>

        <div className="form-group">
          <legend>Username</legend>
          <input value={this.state.usernameInput}
            name="usernameInput"
            className="form-control input-lg" 
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <legend>Password</legend>
          <input type='password' value={this.state.passwordInput} 
            id="thePassword"
            name="passwordInput"
            className="form-control input-lg" 
            onChange={this.handleChange}
          />
        </div>
        {/* <div>
          <input type="checkbox" onClick={this.hidePassword}></input>Hide/Show Password
        </div> */}

        <div>
          <button type="submit" className="btn btn-success btn-lg btn-block signup-btn"> Submit </button>
        </div>

        {/* <div class="or-seperator"><b>or</b></div>

        <p class="hint-text">Sign up with your social media account</p>
        <div class="social-btns text-center">import Geocode from "react-geocode";
            <a href="#" class="btn google" ><i class="fa fa-google"></i></a>
            <a href="#" class="btn facebook " ><i class="fa fa-facebook"></i></a>
            <a href="#" class="btn twitter" ><i class="fa fa-twitter"></i></a>
        </div>
        <p class="hint-text"> Social login coming soon! </p>  */}


      </form>
    )
  }
}

export default Signup;