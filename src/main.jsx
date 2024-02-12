import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([{
  path:"/",
  element: <App/>,
  children:[{
     path:"/",
     element:<Home/>
   },
   {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/sigup",
    element:<Signup/>
  },
  {
    path:"/addtrip",
    element:<Ielts/>
  },
  {
    path:"/listtrip",
    element:<Study/>
  }
  
  ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
