import React from 'react'
import { Link } from 'react-router-dom'

function NavCard(props) {
  return (
    <Link to={props.link}>
      <div className="grid-container">
        <div className="grid-upper">{props.icon}</div>
        <div className="grid-lower">
          <p className="grid-header">{props.label}</p>
        </div>
      </div>
    </Link>
  )
}

export default NavCard
