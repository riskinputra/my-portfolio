import React from 'react'
import icon from './img/icon.png'
import logoNavbar from './img/logo-navbar.png'

import './styles.scss'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={icon} alt="icon" className="icon" />
        <img src={logoNavbar} alt="logo" className="logo-navbar"/>
      </div>
      <ul className="contact-list">
        <li>
          <a href="https://www.linkedin.com/in/riskinputra/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/riskinputra" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github-square" aria-hidden="true"></i>
          </a>
        </li>
        <li className="email">
          <a href="mailto:riski.n.putra@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span className="ml-xs-2">riski.n.putra@gmail.com</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
