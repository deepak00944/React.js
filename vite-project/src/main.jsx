import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Counter from './Counter.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    < Counter/>
  </React.StrictMode>,
)
