import React from 'react';
import { Link } from 'react-router-dom';
import { AccountContext } from '../App';
import Config from '../Config/Config';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onLogin = update => {
    return () => {
      fetch(`${Config.baseUrl}/account/token`, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          update(data.token);
        })
        .catch(error => {
          alert(error);
        });
    };
  };

  redirectToHome = () => {
    this.props.history.replace(`/home`);
  };

  render() {
    return (
      <AccountContext.Consumer>
        {accountContext => {
          if (accountContext.token != null) {
            this.redirectToHome();
            return;
          }

          return (
            <>
              <div className="header-block">
                <div className="page-header">Welcome to GroceryTech</div>
              </div>
              <div
                className="card block-centered"
                style={{ width: '35%', overflow: 'auto', marginTop: '25px' }}
              >
                <div className="flex-col">
                  <div style={{ width: '100%', marginBottom: '20px' }}>
                    <h3 className="form-input-label">Username</h3>
                    <input
                      className="form-input"
                      name="username"
                      type="text"
                      placeholder="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                    <br />
                    <h3 className="form-input-label">Password</h3>
                    <input
                      className="form-input"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div
                    className="flex-row"
                    style={{
                      width: '100%',
                      marginTop: '20px',
                      justifyContent: 'space-evenly',
                      alignContent: 'center'
                    }}
                  >
                    <div
                      onClick={this.onLogin(accountContext.update)}
                      className="btn"
                      style={{
                        flexShrink: '0',
                        justifyContent: 'start'
                      }}
                    >
                      Login
                    </div>
                    <Link to="/register">
                      <div
                        className="btn"
                        style={{
                          flexShrink: '0',
                          justifyContent: 'start',
                          marginLeft: 'auto'
                        }}
                      >
                        Register
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </AccountContext.Consumer>
    );
  }
}
