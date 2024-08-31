import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routing.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
