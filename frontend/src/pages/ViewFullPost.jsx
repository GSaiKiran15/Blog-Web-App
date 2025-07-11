import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import axios from 'axios'

export default function ViewFullPost() {
    const {id, title, content, likes: initialLikes, comments, created_at} = useLoaderData()
    const [likes, setLikes] = useState(initialLikes)
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    console.log(id, title, content, likes, comments, created_at);
    
    async function handleLikeSubmit() {
       const response = await axios.post(`/api/articles/${id}/like`)
       const updateArticleData = response.data
       setLikes(updateArticleData)
    }

    async function handleCommentSubmit(e){
        e.preventDefault()
        axios.post(`/api/articles/${id}/comment`, {id, name, comment}) 
    }   

    return (
    <div className="article-detail">
      <h1 className="article-detail__title">{title}</h1>

      <p className="article-detail__meta">
        Posted At:&nbsp;
        {new Date(created_at).toLocaleDateString("en-US", {
          weekday: "long",
          year:    "numeric",
          month:   "long",
          day:     "numeric",
        })}
      </p>

      <div className="article-detail__content">
        <p>{content}</p>
      </div>

      <div className="article-detail__likes">
        <span className="article-detail__like-count">Likes: {likes}</span>
        <button
          className="article-detail__like-button"
          onClick={handleLikeSubmit}
        >
          👍 Like
        </button>
      </div>

      <form
        className="article-detail__comment-form"
        method="get"
        onSubmit={handleCommentSubmit}
      >
        <input
          className="article-detail__comment-input"
          placeholder="Name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="article-detail__comment-input"
          placeholder="Comment"
          required
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button
          type="submit"
          className="article-detail__comment-button"
        >
          Submit
        </button>
      </form>

      <div className="article-detail__comments">
        <h2 className="article-detail__comments-title">Comments</h2>
        {comments.map(c => (
          <div
            key={c.id}
            className="article-detail__comment-item"
          >
            <h3 className="article-detail__comment-author">
              {c.name}
            </h3>
            <p className="article-detail__comment-text">
              {c.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}