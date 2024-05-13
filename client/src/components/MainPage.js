import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAPI } from '../api/getAPI';
import {SHA1} from 'crypto-js';
function MainPage(){
    const user = localStorage.getItem('username');
    console.log(user);
    return(
        <div className="mainpage">
            <h1>{user}'s Friends</h1>

            <button>Add Friend</button>
        </div>
    );
}
export default MainPage;