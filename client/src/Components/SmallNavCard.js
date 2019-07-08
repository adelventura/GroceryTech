import React from 'react'
import { Link } from 'react-router-dom'

function SmallNavCard(props) {
  return (
    <div className="grid-container-small" onClick={props.onClick}>
      <div className="grid-left">{props.icon}</div>
      <div className="grid-right">{props.label}</div>
    </div>
  )
}

export default SmallNavCard
