import React, { Component } from 'react';
import AuthService from '../services/AuthService';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { usernameInput: '', passwordInput: '' };
    this.service = new AuthService();
  }

  handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  tryToLogin = (e) =>{
      e.preventDefault();
      const uName = this.state.usernameInput;
      const pWord = this.state.passwordInput;
    
      this.service.login(uName, pWord)
      .then(()=>{
          this.props.toggleForm('login');
          this.props.getUser();
      })
  }

  render(){
    return(
      <form onSubmit = {this.tryToLogin}>

        <h2>Sign in</h2>
        
        {/* <p class="hint-text">Sign in with your social media account</p>
        <div class="social-btns text-center">
            <a href="#" class="btn google" ><i class="fa fa-google"></i></a>
            <a href="#" class="btn facebook " ><i class="fa fa-facebook"></i></a>
            <a href="#" class="btn twitter" ><i class="fa fa-twitter"></i></a>
        </div>
        <p class="hint-text"> Social login coming soon! </p>
        <div class="or-seperator"><b>or</b></div> */}

        <div class="form-group">
          <legend>Username</legend>
          <input value={this.state.usernameInput}
          name="usernameInput"
          onChange={this.handleChange}
          />
        </div>
        <div class="form-group">
          <legend>Password</legend>
          <input value={this.state.passwordInput} 
          name="passwordInput"
          onChange={this.handleChange}
          />
        </div>

        <div class="form-group center-it">
          <button>Submit</button>
        </div>

      </form>
    )
  }
}

export default Login;