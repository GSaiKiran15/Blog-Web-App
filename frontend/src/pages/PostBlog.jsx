import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function PostBlog() { 

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()

    async function postBlog(){
        const response = await axios.post("/api/post", {title, content})
        navigate(`/articles/${response.data}`)
    }

    return(
         <div className="blog-form">
      <h1 className="blog-form__heading">Post Your Blog</h1>

      <input
        type="text"
        className="blog-form__input"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        autoComplete="off"
      />

      <textarea
        className="blog-form__textarea"
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        autoComplete="off"
      />

      <button
        type="button"
        className="blog-form__button"
        onClick={postBlog}
      >
        Post
      </button>
    </div>
    )
 }