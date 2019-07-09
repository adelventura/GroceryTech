import React from 'react'
import { Link } from 'react-router-dom'

let purple = '#705772'
let coral = '#f38181'
let yellow = '#fad284'
let green = '#a9eec2'

export default class RegistrationNavPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="register-card" style={{ maxWidth: '400px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <div className="card-header">Are you a...</div>
            <br />
            <Link
              to="/register_buyer"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <div
                className="btn"
                style={{
                  backgroundColor: coral,
                  display: 'flex',
                  justifyContent: 'center',
                  minWidth: '75px'
                }}
              >
                Buyer
              </div>
            </Link>
            <br />
            <br />
            <Link
              to="/register_deliverer"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <div
                className="btn"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  minWidth: '75px'
                }}
              >
                Deliverer
              </div>
            </Link>
            <br />
            <br />
            <Link
              to="/register_manager"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <div
                className="btn"
                style={{
                  backgroundColor: green,
                  display: 'flex',
                  justifyContent: 'center',
                  minWidth: '75px'
                }}
              >
                Manager
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
