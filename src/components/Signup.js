import React, { Component } from 'react';
// import AuthService from '../services/AuthService';
import axios from 'axios';
// import { Link } from 'react-router-dom';

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
  
  showSignup = () =>{
    return(
      <form className="login-signup" onSubmit = {this.tryToLogin}>
        <h2>Sign Up</h2>
          <p className="hint-text">Sign up with your social media account</p>
          <div className="social-btns text-center">
              <a href="#" className="btn google" ><i className="fa fa-google"></i></a>
              <a href="#" className="btn facebook " ><i className="fa fa-facebook"></i></a>
              <a href="#" className="btn twitter" ><i className="fa fa-twitter"></i></a>
          </div>
          <p className="hint-text"> Social login coming soon! </p>
          <div className="or-seperator"><b>or</b></div>
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
          {/* <div className="text-center"> 
            <a> Already have an account? &nbsp; </a>
            <a className="need-space" href="/signup"> Log In </a>
          </div> */}
          <hr/>
          <div className="form-group center-it">
            <button type="submit" className="btn btn-success btn-lg btn-block signup-btn"> Submit </button>
          </div>
      </form>
    )
  }

  render(){
    return(
      <div className="landing-page">
        {this.showSignup()}
      </div>
    )
  }
}

export default Signup;