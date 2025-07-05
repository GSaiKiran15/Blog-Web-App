import express from "express"
import pool from "./db.js";

const app = express()

app.use(express.json())

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

app.get('/api/articles', async (req, res) => {
    const {rows} = await pool.query("select title, content, likes, comments, created_at from posts")
    res.json(rows)
})

app.get('/api/articles/:id', async (req, res) => {
    const {id} = req.params
    const {rows} = await pool.query("select title, content, likes, comments, created_at from posts where id = $1", [id])
    res.json(rows)
})

app.patch('/api/articles/:id/edit', async (req, res) => {
    const {id} = req.params
    const {title, content} = req.body
    const {rows} = await pool.query("update posts set title=$1, content=$2 where id = $3", [title, content, id])
    res.json(rows)
})

app.delete('/api/articles/:id/delete', async (req, res) => {
    const {id} = req.params
    const {rows} = await pool.query("delete from posts where id=$1", [id]) //TODO only the user posted must be able to delete.
    res.json(rows)
})

app.post('/api/articles/:id/upvote', async (req, res) => {
    const {id} = req.params
    const {rows} = await pool.query("update posts set likes = likes + 1 where id=$1", [id])
    res.json(rows)
})

app.post('/api/articles/:id/comment', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, comment } = req.body;

    // turn your new comment into a JSON string
    const newComment = JSON.stringify({ name, comment });

    const { rows } = await pool.query(
      `
      UPDATE posts
      SET comments = array_append(
        COALESCE(comments, ARRAY[]::jsonb[]),
        $1::jsonb
      )
      WHERE id = $2
      RETURNING *;
      `,
      [ newComment, id ]
    );

    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

app.listen(8000, function() {
    console.log("Server is running on PORT 8000.");
})

app.get('/api/user', async (req, res) => {
    const {username} = req.body
    console.log(username
        
    );
    
    const {rows} = await pool.query("select id from users where username = $1", [username])
    
    res.json(rows[0])
})