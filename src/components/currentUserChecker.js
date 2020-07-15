import {useEffect} from 'react'
import {UserfContext} from '../context/userState'
import { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Axios from 'axios'

const CurrentUserChecker=({children})=>{
    const[,setCurrentUserState]=useContext(UserfContext)
    const[token]=useLocalStorage('token')

    useEffect(() => {
        if(!token){
            setCurrentUserState(state=>({
                ...state,
               isLoggedIn:false,
                }))
            return
        }
        Axios.post("http://54.169.208.124:9000/api/getgoogletoken",{token})
        .then(res=>{
            console.log('local check',res);
            if(res.data.msg!=='user not exist')
            {setCurrentUserState(state=>({
                ...state,
                isLoading:false,
                isLoggedIn:true,
                currentUser:res.data.data.userinfo
            }))}
        })
        .catch(err=>{console.log(err)})
    }, [setCurrentUserState,token])


return children
}
export default CurrentUserChecker