import React from 'react'
import { Link } from 'react-router-dom'

class Button extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Link to={this.props.linkTo}>
          <button className="home-page-btn">
            <img src={this.props.img} alt={this.props.alt} />
            <p>{this.props.label}</p>
          </button>
        </Link>
      </div>
    )
  }
}
export default Button
