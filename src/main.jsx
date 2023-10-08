import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyRouter from './Components/Mainpage/Router/Router.jsx'
import AuthRouter from './Components/Mainpage/AuthRouter/AuthRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthRouter>
    <RouterProvider router={MyRouter}></RouterProvider>
    </AuthRouter>
  </React.StrictMode>,
)
