import React from 'react'
import backArrows from '../Images/chevrons-left.svg'

class Navigation extends React.Component {
  render() {
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
}

export default Navigation
