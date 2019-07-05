import React from 'react'
import backArrows from '../Images/chevrons-left.svg'
import { FiShoppingCart } from 'react-icons/fi'

function Navigation(props) {
  const navItems = [
    '<<',
    'GroceryTech',
    <FiShoppingCart color={'#727272'} size={26} />
  ]

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
