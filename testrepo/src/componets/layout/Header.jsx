import React from 'react'
import logo from '../assets/app logo.png';
export default function Header() {
  return (
    <div>
        <div className="Header">
            <div className="Header-logo">
                <img src={logo}/>

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
  );
}
