import React, { useEffect } from 'react'
import { NavLink} from "react-router-dom"
import { useLocation } from 'react-router-dom';

import './styles.scss'

function Sidebar() {
  const location = useLocation()
  useEffect(() => {}, [location])

  const currentHash = window.location.hash
  const menus = [
    {
      label: 'Home',
      path: '#home',
      active: currentHash === "" || currentHash === "#home"
    },
    {
      label: 'About',
      path: '#about',
      active: currentHash === "#about"
    },
    {
      label: 'Skills',
      path: '#skills',
      active: currentHash === "#skills"
    },
    {
      label: 'Experience',
      path: '#experience',
      active: currentHash === "#experience"
    },
    {
      label: 'Contact',
      path: '#contact',
      active: currentHash === "#contact"
    }
  ]
  const listMenu = menus.map((menu, index) => (
    <li className="menu-item" key={index}>
      <NavLink to={menu.path} activeClassName={menu.active ? 'active' : ''}>
        {menu.label}
      </NavLink>
      {/* <a href={menu.path} className={menu.active ? 'active' : ''}>{menu.label}</a> */}
    </li>
  ))
  return (
    <div className="sidebar">
      <div className="menu">
        <ul>
          {listMenu}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
