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
        <div className="container">
            
            <form  onSubmit={onSubmit}>
              <div className="form-group">
                  UserName :<input className="form-control" type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                Password :<input type="text" className="form-control mb-3" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="btn btn-primary mr-5" name="submitButton"type="submit">Submit</button>
                <button className="btn btn-primary" onClick={getAll}>getAll</button>
                </div> 
            </form>
            <h1>{token}</h1>
        </div>
    )
}

export default PostTesting
