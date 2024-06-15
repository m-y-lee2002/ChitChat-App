import React, {Component} from 'react';
import {useNavigate} from 'react-router-dom';
class EditFriend extends Component{
    constructor(props){
        super(props);
        this.state = {
            friend: JSON.parse(localStorage.getItem('targetFriend')),
            popUpInput: false,
            newFriendName: '',
            updatedFriend: null
        };
        this.backUp = this.backUp.bind(this);
        this.changeName = this.changeName.bind(this);
        this.setName = this.setName.bind(this);
        this.saveUserChanges = this.saveUserChanges.bind(this);
        this.saveFriendProfile = this.saveFriendProfile.bind(this);
    }
    saveFriendProfile(){
        const{friend} = this.state;
        //Update Friend code here
        this.props.navigate('../mainpage');
    }
    saveUserChanges(){
        const{updatedFriend} = this.state;
        this.setState({friend: updatedFriend, popUpInput: false});
        localStorage.setItem('targetFriend', JSON.stringify(updatedFriend));
    }
    setName(inputName){
        const{friend} = this.state;
        const updatedFriend = {...friend};
        updatedFriend.fname =  inputName;
        this.setState({updatedFriend: updatedFriend});
    }
    changeName(){
        this.setState({popUpInput: true});
    }
    backUp(){
        this.props.navigate('../mainpage');
    }
    componentDidMount(){

    }
    render(){
        const{friend,popUpInput} = this.state;
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
                Birthday: {friend.bday} <button>Edit</button>
                <br/>
                Goal Set: {friend.goalSet? friend.goalSet:'None'} <button>Edit</button>
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