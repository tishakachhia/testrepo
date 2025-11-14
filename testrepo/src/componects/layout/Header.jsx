import React from 'react'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <div>
        <div className="header">
                <div className="header-logo"> 

                     <img src={logo} alt="" />

                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </ul>
                </div>
        </div>

    </div>
  )
}
