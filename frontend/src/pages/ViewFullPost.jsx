import { useLoaderData } from "react-router-dom"

export default function ViewFullPost() {
    const data = useLoaderData()
    return(
        <>
        <h1>{data.title}</h1>
        <p>Posted At : {new Date(data.created_at).toLocaleDateString("en-US", {
    weekday: "long",
    year:    "numeric",
    month:   "long",
    day:     "numeric"
  })}</p>
        <p>{data.content}</p>
        <div className="comments">
        <h2>Comments :</h2>
        {data.comments.map(comment => {<><h2>comment.name</h2><br>comment.comment</br></>})}
        </div>
        <p>Likes : {data.likes}</p>
        </>
    )
}