import React from 'react'
import backArrows from '../Images/chevrons-left.svg'

function Navigation(props) {
  const navItems = ['<<', 'GroceryTech']

  return (
    <ul className="nav-bar">
      {navItems.map(item => (
        <li key={item}>
          <button className="btn-clear nav-link">{item}</button>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
