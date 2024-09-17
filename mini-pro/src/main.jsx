import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routing.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
<RouterProvider router={router} />
</Provider>
)
