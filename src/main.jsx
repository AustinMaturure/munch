import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero'
import Navbar from './Navbar'
import Menu from './Menu'
import About from './About'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Hero />
    <Menu/>
    <About/>
  </React.StrictMode>,
)