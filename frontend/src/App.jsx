import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import PostBlog from './pages/PostBlog'
import { AuthProvider } from './contexts/AuthContext'
import ArticlesList from './pages/ArticleList'
// import ArticlesListPage from './pages/ArticlesListPage
import axios from 'axios'
import ViewFullPost from './pages/ViewFullPost'

const routes = [{
  path: "/",
  element: <ArticlesList/>,
  loader: async function () {
    const response = await axios.get('/api/articles')
    const data = response.data
    return {data}
  }
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/post",
    element: <PostBlog/>
  },
  {
    path: '/articles/:id',
    element: <ViewFullPost/>,
    loader: async ({params}) => {
      const {id} = params
      const {data} = await axios.get(`/api/articles/${id}`)
      console.log(data);      
      return data
    }
  }
]

const router = createBrowserRouter(routes)

function App() {

  return (
    <>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    </>
  )
}

export default App
