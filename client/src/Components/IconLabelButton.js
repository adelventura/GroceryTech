import React from 'react'
import { Link } from 'react-router-dom'

function IconLabelButton(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Link to={props.link}>
        <button className="home-page-btn">
          <img src={props.img} alt={props.alt} />
          <p>{props.label}</p>
        </button>
      </Link>
    </div>
  )
}

export default IconLabelButton
