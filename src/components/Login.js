import React, { Component } from 'react';
// import AuthService from '../services/AuthService';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { usernameInput: '', passwordInput: '' };
    // this.service = new AuthService();
  }

  handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  tryToLogin = (e) =>{
      e.preventDefault();
      const uName = this.state.usernameInput;
      const pWord = this.state.passwordInput;
    
      // this.service.login(uName, pWord)
      axios.post('http://localhost:5000/api/auth/login', {
        username: uName,
        password: pWord
      }, {withCredentials: true})
      .then(()=>{
        this.props.getUser();
        this.props.toggleForm('login');
      })
  }

  render(){
    return(
      <form onSubmit = {this.tryToLogin}>

        <h2>Sign in</h2>
        
        {/* <p className="hint-text">Sign in with your social media account</p>
        <div className="social-btns text-center">
            <a href="#" className="btn google" ><i className="fa fa-google"></i></a>
            <a href="#" className="btn facebook " ><i className="fa fa-facebook"></i></a>
            <a href="#" className="btn twitter" ><i className="fa fa-twitter"></i></a>
        </div>
        <p className="hint-text"> Social login coming soon! </p>
        <div className="or-seperator"><b>or</b></div> */}

        <div className="form-group">
          <legend>Username</legend>
          <input value={this.state.usernameInput}
            name="usernameInput"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <legend>Password</legend>
          <input value={this.state.passwordInput} 
            name="passwordInput"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group center-it">
          <button>Submit</button>
        </div>

      </form>
    )
  }
}

export default Login;