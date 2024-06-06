import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';  
import { postAPI } from '../api/postAPI';
class CreateFriend extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: localStorage.getItem('username'),
            friendName: "-1",
            friendBirthday: "-1",
            friendGoal: false
        };
        this.submitHandler = this.submitHandler.bind(this);
        this.setFName = this.setFName.bind(this);
        this.setFBday = this.setFBday.bind(this);
    }
    componentDidMount(){

    }
    setFName(event){
        this.setState({friendName:event.target.value});
    }
    setFBday(event){
        this.setState({friendBirthday:event.target.value});
    }
    submitHandler(event){
        event.preventDefault();
        const{user, friendName,friendBirthday,friendGoal} = this.state;
        if(friendName === "-1"){
            alert("Please enter a name for your friend");
        }else{
            const newFriend = {
                user: user,
                imagePic: "example1",
                fname: friendName,
                bday: friendBirthday,
                goalSet:friendGoal
            }
            postAPI(newFriend,'/friend');
            alert("Friend has been created.");
            this.props.navigate('../mainpage');
        }
        console.log(friendName);
        console.log(friendBirthday);
    }
    render(){
        const{user} = this.state;
        return(
            <div className='createFriend'>
                <h1>Create New Friend for: {user}</h1>
                <form onSubmit={this.submitHandler}>
                    Friend Name: <input type="text" onChange={this.setFName}/>
                    <br/>
                    <br/>
                    Birthday: <input type="date" onChange={this.setFBday} />
                    <br/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        )
    }
}
function PageNavigation(props){
    const navigate = useNavigate();
    return <CreateFriend{...props} navigate={navigate}/>;
  }
  export default PageNavigation;