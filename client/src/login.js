import React,{useState} from "react";

function login() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const submitHandler = ()=>{
        
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
  
  export default login;
  