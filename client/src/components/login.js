import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAPI } from '../api/getAPI';
import {SHA1} from 'crypto-js';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("name");
    const [password, setPassword] = useState("name");
    const submitHandler = (event)=>{
      event.preventDefault();
      let found = false;
        getAPI('')
        .then(data=>{
            data.forEach((tuple)=>{
              if(username === tuple.username && SHA1(password).toString() === tuple.password){
                found = true;
                navigate('./mainpage');
              }
            });
            if(found){
              console.log("User Found");

            }else{
              console.log(SHA1(password).toString());
              alert("Invalid Login");
            }
        }).catch(error => {
          console.error(error);
        });
    };
    return (
      <div className="login">
        <header className="login-header">
          <h1>Login Page</h1>
        </header>
        <form onSubmit={submitHandler}>
            Username: <input type="text" onChange={(event)=>{setUsername(event.target.value)}}/>
            <br/>
            <br/>
            Password: <input type="password" onChange={(event)=>{setPassword(event.target.value)}}/>
            <br/>
            <button type="submit">Submit</button>
        </form>
        <Link to="/register">create an account</Link> 
      </div>
    );
  }
  
  export default Login;
  