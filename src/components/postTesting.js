import React,{useState} from 'react'
import axios from 'axios'

function PostTesting() {

    
    const [username,setUsername]=useState("goo");
    const [password,setPassword]=useState("goop");
    const [token,setToken]=useState("")
    
    const onSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://54.169.208.124:9000/api/gettoken",{username,password})
        .then(res=>
            {
            setToken(res.data.data.token);
        }
            ).catch(err=>{console.log(err);setToken("")});
        }

        const getAll=()=>{
            axios.post("http://54.169.208.124:9000/api/getall",{token})
            .then(res=>console.log(res))
            .catch(err=>console.log(err)
            )
        }

   
    return (
        <div className="form-container">
            
            <form className="form-container" onSubmit={onSubmit}>
                UserName :<input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                Password :<input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button name="submitButton"type="submit">Submit</button>
            </form>
            <h1>{token}</h1>
            <button onClick={getAll}>getAll</button>
        </div>
    )
}

export default PostTesting
