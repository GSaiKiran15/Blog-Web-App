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
    console.log(username, password);
    
    try{
        const {rows} = await pool.query("select id, username, password_hash from users where username = $1",[username])
        // console.log(rows[0].password_hash, password);
        if (rows.length === 0){
            console.log("Invalid Username Or Password")
            res.send("Invalid Username Or Password")
        }
        else if (password === rows[0].password_hash){
            console.log("Login successful");
            console.log(rows);
            // res.json()
            
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