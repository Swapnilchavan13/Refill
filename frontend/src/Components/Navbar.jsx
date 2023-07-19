import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/navbar.css'

export const Navbar = () => {
  return (
    <div id='navbar'>
        <div>
            <h1>ReFill</h1>
        </div>
        <div id='navbardiv'>
          <Link to="/buy">
            <h3>Buy Fuel</h3>
          </Link>
          <Link to="/register">
            <h3>Register</h3>
          </Link>
          <Link to="/login">
            <h3>Login</h3>
          </Link>
        </div>
    </div>
  )
}
