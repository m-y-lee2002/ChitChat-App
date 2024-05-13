    import { useState } from "react";
    import {SHA1} from 'crypto-js';
    import { useNavigate } from 'react-router-dom';
    import { postAPI } from "../api/postAPI";
    import { getAPI } from "../api/getAPI";
    function Register(){
        const navigate = useNavigate();
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [verifyPassword, setVerifyPassword] = useState('');
        const [birthday, setBirthday] = useState('');
        const submitHandler = (event)=>{
            event.preventDefault();
            if(verifyPassword === password){
                let found = false;
                getAPI('')
                .then(data=>{
                    data.forEach((tuple)=>{
                    if(username === tuple.username){
                        found = true;
                    }
                    });
                    if(found){
                        alert("Username has been taken try again");

                    }else{
                        
                        const userInfo = {
                            username: username,
                            password: SHA1(password).toString(),
                            bday:birthday
                        };
                        postAPI(userInfo,'')
                        alert("Account Created");
                        localStorage.setItem('username',username);
                        navigate('../mainpage');
                    }
                }).catch(error => {
                    console.error(error);
                });
                ///alert("Account Created");

            }else{
                alert("Passwords Do Not Match Try Again");
            }
        };
        return(
            <div className="register">
                <h1>Register</h1>
                <form onSubmit={submitHandler}>
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


