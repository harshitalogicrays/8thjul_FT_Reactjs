import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter } from "react-router-dom";
import Routing from './Routing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routing />
  </BrowserRouter>,
)
