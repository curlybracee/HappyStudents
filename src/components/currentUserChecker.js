import useFetch from '../hooks/useFetch'
import {useEffect} from 'react'
import {UserfContext} from '../context/userState'
import { useContext } from 'react'
import useLocalSorage from '../hooks/useLocalStorage'

const CurrentUserChecker=({children})=>{
    const[currentUser,setCurrentUserState]=useContext(UserfContext)
    const[{response},doFetch]=useFetch('/getgoogletoken')
    console.log('response',response);
    const[token]=useLocalSorage('token')

    useEffect(() => {
        if(!token){
            setCurrentUserState(state=>({
                ...state,
               isLoggedIn:false,
                }))
            return
        }
        doFetch()
        setCurrentUserState(state=>({
            ...state,
            isLoading:true,
        }))
    }, [])

    useEffect(()=>{
        if(!response){
            return
        }
        setCurrentUserState(state=>({
            ...state,
            isLoading:false,
            isLoggedIn:true,
            currentUser:response.user
        }))
    },[response])

return children
}
export default CurrentUserChecker