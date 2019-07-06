import React from 'react'
import { Link } from 'react-router-dom'

let purple = '#705772'
let coral = '#f38181'
let yellow = '#fad284'
let green = '#a9eec2'

class RegistrationNavPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="register-card">
          <div
            style={{
              display: 'flex',
              'flex-direction': 'column',
              'justify-content': 'center'
            }}
          >
            <div className="card-header">Are you a...</div>

            <Link to="/register_buyer">
              <div className="btn" style={{ 'background-color': coral }}>
                Buyer
              </div>
            </Link>
            <br />
            <br />
            <Link to="/register">
              <div className="btn">Deliverer</div>
            </Link>
            <br />
            <br />
            <Link to="/register">
              <div className="btn" style={{ 'background-color': green }}>
                Manager
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationNavPage
