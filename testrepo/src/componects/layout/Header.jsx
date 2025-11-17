import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <div>
        <div className="header">
                <div className="header-logo"> 

                  <img src={logo} alt="" />

                </div>
                <div className="navbar">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                    
                </div>
        </div>

    </div>
  )
}
