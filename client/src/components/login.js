import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAPI } from '../api/getAPI';
import {SHA1} from 'crypto-js';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  setUsername(event){
    this.setState({username: event.target.value});
  }

  setPassword(event){
    this.setState({password:event.target.value});
  }

  submitHandler(event) {
    event.preventDefault();
    let found = false;
    const { username, password } = this.state;

    getAPI('')
      .then(data => {
        data.forEach((tuple) => {
          if (username === tuple.username && SHA1(password).toString() === tuple.password) {
            found = true;
            localStorage.setItem('username', username);
            this.props.navigate('/mainpage'); 
          }
        });
        if (found) {
          console.log("User Found");
        } else {
          console.log(SHA1(password).toString());
          alert("Invalid Login");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render(){
    return(
      <div className="login">
      <header className="login-header">
        <h1>Login Page</h1>
      </header>
      <form onSubmit={this.submitHandler}>
          Username: <input type="text" onChange={this.setUsername}/>
          <br/>
          <br/>
          Password: <input type="password" onChange={this.setPassword}/>
          <br/>
          <button type="submit">Submit</button>
      </form>
      <Link to="/register">create an account</Link> 
      </div>

    );
  }
}

function PageNavigation(props){
  const navigate = useNavigate();
  return <Login{...props} navigate={navigate}/>;
}
export default PageNavigation;
  