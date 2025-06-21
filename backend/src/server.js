import express from "express"
import pool from "./db.js";

const app = express()

app.use(express.json())

app.post('/api/register', async(req, res) => {
    const {username, email, password_hash} = req.body
    try{
        const result = await pool.query("INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)", [username, email, password_hash])
        res.send("next login")
    }
    catch(err){
        console.log(err);
    }
})

app.post('/api/login', async (req,res) => {
    const {username, password_hash} = req.body
    try{
        const {rows} = await pool.query("select username, password_hash from users where username = $1",[username])
        console.log(rows.length);
        if (rows.length === 0){
            res.send("Invalid Username Or Password")
        }
        else if (password_hash === rows[0].password_hash){
            res.send("Login Successful")
        }
        else{
            res.send("Invalid username or password")
        }
    }
    catch(err){
        console.log(err);
    }
})

app.listen(8000, function() {
    console.log("Server is running on PORT 8000.");
})