import React ,{Component }from 'react';
import {UserOutput} from '../component/UserOutput'
import{UserInput} from '../component/UserInput'



class App extends  Component{

    state={
        userName: 'initial'
    }


 UserInputHandle =(event)=>{
     this.setState({
        userName: event.target.value
    })

     
 }

render(){
        return (
        <div>
            <UserInput userNameInput={this.UserInputHandle} currenctName={this.state.userName}></UserInput>
            <UserOutput userNameOutput={this.state.userName} ></UserOutput>
        </div>
        )
    }

}
export default App