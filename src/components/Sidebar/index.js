import React from 'react'
import './styles.scss'

function Sidebar() {
  const menus = [
    {
      label: 'Home',
      path: '#home'
    },
    {
      label: 'About',
      path: '#about'
    },
    {
      label: 'Skills',
      path: '#skills'
    },
    {
      label: 'Experience',
      path: '#experience'
    },
    {
      label: 'Contact',
      path: '#contact'
    }
  ]
  const listMenu = menus.map((menu, index) => (
    <li className="menu-item" key={index}>
      <a href={menu.path}>{menu.label}</a>
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
