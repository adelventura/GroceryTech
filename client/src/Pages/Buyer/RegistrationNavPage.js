import React from 'react';
import { Link } from 'react-router-dom';

export default class RegistrationNavPage extends React.Component {
  render() {
    return (
      <div>
        <div className="header-block">
          <div className="page-header">Register New Account</div>
        </div>
        <div className="block-centered">
          <div
            className="card flex-col"
            style={{ maxWidth: '400px', marginTop: '25px' }}
          >
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
                to="/register/buyer"
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
                  Buyer
                </div>
              </Link>
              <br />
              <br />
              <Link
                to="/deliverer/register"
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
                to="/manager/register"
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
                  Manager
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
