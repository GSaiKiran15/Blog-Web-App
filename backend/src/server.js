import express from "express"
import pool from "./db.js";

const app = express()

app.use(express.json())

app.post('/api/register', async(req, res) => {
    const {username, email, password, confirmPassword} = req.body
    try{
        const result = await pool.query("INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)", [username, email, password])
        console.log("Registration Successful");
        res.send("Registration Successful")
    }
    catch(err){
        console.log(err);
    }
})

app.post('/api/login', async (req,res) => {
    const {username, password} = req.body
    try{
        const {rows} = await pool.query("select username, password_hash from users where username = $1",[username])
        console.log(rows[0].password_hash, password);
        if (rows.length === 0){
            console.log("Invalid Username Or Password")
            res.send("Invalid Username Or Password")
        }
        else if (password === rows[0].password_hash){
            console.log("Login successful");
            
            res.send("Login Successful")
        }
        else{
            console.log("Invalid Username Or Password")
            res.send("Invalid username or password")
        }
    }
    catch(err){
        console.log(err);
    }
})

app.post('/api/post', async (req, res) => {
    const {title, content} = req.body
    try{
        const {rows} = await pool.query("insert into posts(user_id, title, content) values ($1, $2, $3)", [1, title, content])
        console.log(rows);
    }
    catch(err){
        console.log(err);
    }
})

app.listen(8000, function() {
    console.log("Server is running on PORT 8000.");
})