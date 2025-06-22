import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

export default function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    async function logIn(){
        try{
            const response = axios.post("/api/login", {username, password})
            setError(response.error);
        }
        catch(err){
            setError(err.response?.data?.error || err.message)
        }
    }

    return(
        <>
        <h1>Log In</h1>
        {error && <p>{error}</p>}
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="password" name="password" id="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={logIn}>Log In
        </button>
        </>
    )

}