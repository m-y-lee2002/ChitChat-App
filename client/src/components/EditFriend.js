import React, {Component} from 'react';
import {useNavigate} from 'react-router-dom';
import { putAPI } from '../api/putAPI';
class EditFriend extends Component{
    constructor(props){
        super(props);
        this.state = {
            friend: JSON.parse(localStorage.getItem('targetFriend')),
            popUpInput: false,
            changeBDay: false,
            newFriendName: '',
            updatedFriend: null
        };
        this.backUp = this.backUp.bind(this);
        this.changeName = this.changeName.bind(this);
        this.setName = this.setName.bind(this);
        this.saveUserChanges = this.saveUserChanges.bind(this);
        this.saveFriendProfile = this.saveFriendProfile.bind(this);
        this.setBDay = this.setBDay.bind(this);
        this.changeBDay = this.changeBDay.bind(this);
    }
    async saveFriendProfile(){
         const{friend} = this.state;
        const result = await putAPI(friend, '/friends');
        console.log(result);
        this.props.navigate('../mainpage');

    }
    saveUserChanges(){
        const{updatedFriend} = this.state;
        this.setState({friend: updatedFriend, popUpInput: false, changeBDay: false});
        localStorage.setItem('targetFriend', JSON.stringify(updatedFriend));
    }
    setName(inputName){
        const{friend} = this.state;
        const updatedFriend = {...friend};
        updatedFriend.fname =  inputName;
        this.setState({updatedFriend: updatedFriend});
    }
    setBDay(inputBday){
        const{friend} = this.state;
        const updatedFriend = {...friend};
        updatedFriend.bday =  inputBday;
        this.setState({updatedFriend: updatedFriend});     
    }
    changeName(){
        this.setState({popUpInput: true});
    }
    changeBDay(){
        this.setState({changeBDay:true});
    }
    backUp(){
        this.props.navigate('../mainpage');
    }
    componentDidMount(){

    }
    render(){
        const{friend,popUpInput, changeBDay} = this.state;
        return(
            <div className='editfriend'>
                <button onClick={this.backUp}>Back</button>
                <h1> {friend.fname} friend profile</h1>
                {popUpInput? (
                    <div>
                        Name: <input type="text" onChange={(e)=>{this.setName(e.target.value)}}/> <button onClick={this.saveUserChanges}>Save</button>
                    </div>
                ):(
                    <div>
                        Name: <button onClick={this.changeName}>Edit</button>
                    </div> 
                )}
               
                <br/>
                {changeBDay? (
                    <div>
                        Birthday: <input type="date" onChange={(e)=>{this.setBDay(e.target.value)}}/> <button onClick={this.saveUserChanges}>Save</button>
                    </div>
                ):(
                    <div>
                        Birthday: {friend.bday} <button onClick={this.changeBDay}>Edit</button>
                    </div> 
                )}
                <br/>
                Goal Set: {friend.goalSet? friend.goalSet:'None'} <button>Edit</button>
                <br/>
                <br/>
                <button onClick={this.saveFriendProfile}> Save Profile </button>
            </div> 
        )
    }
}

function PageNavigation(props){
    const navigate = useNavigate();
    return <EditFriend{...props} navigate ={navigate}/>;
}
export default PageNavigation;