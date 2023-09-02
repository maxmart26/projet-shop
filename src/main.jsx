import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import Nav from '../Components/Nav/Nav.jsx'
import '../style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Nav/>
    <App/>
  </BrowserRouter>,
)
