import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import PostBlog from './pages/PostBlog'

const routes = [{
  path: "/",
  element: <Login/>
}]

const router = createBrowserRouter(routes)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
