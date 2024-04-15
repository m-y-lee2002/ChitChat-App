import React, { useState } from 'react';
import { getAPI } from './api/getAPI';

function Login() {
    const [username, setUsername] = useState("name");
    const [password, setPassword] = useState("name");
    const submitHandler = ()=>{
      let found = false;
        getAPI('')
        .then(data=>{
            data.forEach(tuple=>{
              if(username === tuple.username && password === tuple.password){
                found = true;
              }
            })
            if(found){

            }else{
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
      </div>
    );
  }
  
  export default Login;
  