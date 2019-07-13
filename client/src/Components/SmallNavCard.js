import React from 'react'

function SmallNavCard(props) {
  return (
    <div className="grid-container-small" onClick={props.onClick}>
      <div className="grid-left">{props.icon}</div>
      <div className="grid-right">{props.label}</div>
    </div>
  )
}

export default SmallNavCard
