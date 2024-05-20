import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  
import { getAPI } from '../api/getAPI';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [], 
            user: localStorage.getItem('username') 
        };
    }

    componentDidMount() {
        const { user } = this.state;
        if (user) {
            getAPI('/friends/' + user)
                .then(data => {
                    this.setState({ friends: data }); 
                    data.forEach(friend => console.log(friend.fname));
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    render() {
        const { friends, user } = this.state;
        return (
            <div className="mainpage">
                <button>Back</button>
                <h1>{user}'s Friends</h1>
                <ul>
                    {friends.map(friend => (
                      <li key={friend.fid}>{friend.fname}<button>Delete</button></li>
                    ))}
                </ul>
                <button>Add Friend</button>
            </div>
        );
    }
}

export default MainPage;
