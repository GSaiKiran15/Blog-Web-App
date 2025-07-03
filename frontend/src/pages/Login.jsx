import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export default function LogIn(){

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  async function logIn() {
    try{
            await signInWithEmailAndPassword(getAuth(), username, password);
            navigate('/post');
        } catch (e) {
            setError(e.message)
        }
  }

  return (
    <>
      <h1>Log In</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={logIn}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>
      </form>

      <p>
        <Link to="/register">Don't have an account? Register here</Link>
      </p>
    </>
  )
}