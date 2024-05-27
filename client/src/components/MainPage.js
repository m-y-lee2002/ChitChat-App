import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  
import { getAPI } from '../api/getAPI';
import { deleteAPI } from '../api/deleteAPI';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [], 
            user: localStorage.getItem('username') 
        };
        this.logOut = this.logOut.bind(this);
        this.deleteFriend = this.deleteFriend.bind(this);
        this.fetchFriends = this.fetchFriends.bind(this);
    }
    logOut(){
        localStorage.clear();
        this.props.navigate('../login');
    }
    deleteFriend(targetID){
        console.log(targetID);
        deleteAPI('/friends/' + targetID);
        this.fetchFriends();
        //this.props.navigate('../mainpage');
    }
    fetchFriends(){
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
    componentDidMount() {
        this.fetchFriends();
    }

    render() {
        const { friends, user } = this.state;
        return (
            <div className="mainpage">
                <button onClick={this.logOut}>Back</button>
                <h1>{user}'s Friends</h1>
                <ul>
                    {friends.map(friend => (
                      <li key={friend.fid}>{friend.fname}<button onClick={() => this.deleteFriend(friend.fid)}>Delete</button></li>
                    ))}
                </ul>
                <button>Add Friend</button>
            </div>
        );
    }
}

function PageNavigation(props){
    const navigate = useNavigate();
    return <MainPage{...props} navigate={navigate}/>;
  }
  export default PageNavigation;
    