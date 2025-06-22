import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

const routes = [{
  path: "/",
  element: <Register/>
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
