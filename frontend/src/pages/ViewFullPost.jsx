import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import axios from 'axios'

export default function ViewFullPost() {
    const {id, title, content, likes: initialLikes, comments, created_at} = useLoaderData()
    const [likes, setLikes] = useState(initialLikes)
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

    async function handleLikeSubmit() {
       const response = await axios.post(`/api/articles/${id}/like`)
       const updateArticleData = response.data
       setLikes(updateArticleData)
    }

    async function handleCommentSubmit(){
        axios.post(`/api/articles/${id}/comment`, {id, name, comment}) 
    }   

    return(
        <>
        <h1>{title}</h1>
        <p>Posted At : {new Date(created_at).toLocaleDateString("en-US", {
    weekday: "long",
    year:    "numeric",
    month:   "long",
    day:     "numeric"
  })}</p>
        <p>{content}</p>
        <p>Likes : {likes}</p>
        <button onClick={handleLikeSubmit}>Like</button><br></br>
        <form method="get">
        <input placeholder="Name" required onChange={(e) => setName(e.target.value)} value={name}></input>
        <input placeholder="Comment" required onChange={(e) => setComment(e.target.value)} value={comment}></input>
        <button onClick={handleCommentSubmit} type="submit">Submit</button>
        </form>
        <div className="comments">

        <h2>Comments :</h2>
        {comments.map(comment => (
        <div key={comment.id /* or some other unique key */}>
            <h2>{comment.name}</h2>
            <p>{comment.comment}</p>
        </div>
        ))}
       
        </div>

        </>
    )
}