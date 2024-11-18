
import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div>
        <h1>home</h1>
        <p><Link to="/Student-React/:id">go to course</Link></p>
    </div>
  )
}

export default Home