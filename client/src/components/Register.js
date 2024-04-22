import { useState } from "react";
function Register(){
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const submitHandler = (event)=>{
        event.preventDefault();
        if(verifyPassword === password){
            alert("email:" + email + "| username:" + username + " | bday:" + birthday+ " | password: " + password);
        }else{
            alert("Passwords Do Not Match Try Again");
        }
    }
    return(
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
            Email: <input type= "text" onChange={(e)=>{setEmail(e.target.value)}}/>
            <br/>
            <br/>
            Username: <input type="text" onChange={(e) =>{setUsername(e.target.value)}}/>
            <br/>
            <br/>
            Password: <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/>
            <br/>
            Verify Password: <input type="password" onChange={(e)=>{setVerifyPassword(e.target.value)}}/>
            <br/>
            <br/>
            Birthday: <input type= "date" onChange={(e)=>{setBirthday(e.target.value)}}/>
            <br/>
            <br/>
            <button type="submit">Submit</button>
            <br/>
            </form>
        </div>
    );
}
export default Register;