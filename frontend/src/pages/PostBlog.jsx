import axios from "axios"
import { useState } from "react"


export default function PostBlog() { 

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    async function postBlog(){
        const response = await axios.post("/api/post", {title, content})
        console.log(response);
    }

    return(
        <>
        <h1>Post Your Blog</h1>
        <input type="text" placeholder="Title" id="title" value={title} onChange={e => setTitle(e.target.value)} autocomplete="off"/>
        <textarea type="text" id="content" placeholder="Content" value={content} onChange={e => setContent(e.target.value)} autocomplete="off"/>
        <button type="submit" onClick={postBlog}>Post
        </button>
        </>
    )
 }