import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register(){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    async function register(){
        if (password !== confirmPassword){
            setError("Both Passwords must be same!")
            return
        }
         try{
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/login');
        } catch (e) {
            setError(e.message)
        }
    }

    return(
        <>
        <h1>Register</h1>
        {error && <p>{error}</p>}
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" name="password" id="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
        <button onClick={register}>Register
        </button>
        <Link to='/login'>Already have an Account? Log In</Link>
        </>
    )

}