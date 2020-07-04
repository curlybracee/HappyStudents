import React,{createContext,Component} from 'react'
import{useHistory} from 'react-router-dom'


export const userContext=createContext();
class UserContextProvider extends Component {
    state = { 
        isToken:true,
        token:localStorage.getItem("token")
     }
     
     userLog=()=>{
        let history=useHistory();
          this.state.isToken?localStorage.clear():console.log("login");
          ;
            this.setState({isToken:!this.state.isToken})

         
     }
    render() { 
        return ( 
            <userContext.Provider value={{...this.state,userLog:this.userLog}}>
                {this.props.children}
            </userContext.Provider>
         );
    }
}
 
export default UserContextProvider;