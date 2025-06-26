import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import useUser from "../useUser"

export default function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const {user, setUser} = useUser()

    async function logIn(){
        try{
            const response = await axios.post("/api/login",{username, password})
            setError(response.error);
            // const userID = await axios.get('/api/user', {username})
            // setUser(userID.id)
            // setError(userID)
        }
        catch(err){
            setError(err.response?.data?.error || err.message)
        }
    }

    return(
        <>
        <h1>Log In</h1>
        <h1>{user}</h1>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="password" name="password" id="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={logIn}>Log In</button>
        {/* <p><Link to={"/register"}>Don't have an account? Register Here</Link></p> */}
        </>
    )
}