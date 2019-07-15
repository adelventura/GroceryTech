import React from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    alert('Name is: ' + this.state.firstName + ' ' + this.state.lastName);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-header">Welcome to GroceryTech</div>

        <div
          className="card block-centered"
          style={{ width: '35%', overflow: 'auto' }}
        >
          <div className="flex-col">
            <div>
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
              <Link to="/home">
                <div
                  className="btn"
                  style={{
                    flexShrink: '0',
                    justifyContent: 'start'
                  }}
                >
                  Login
                </div>
                />
              </Link>
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
      </React.Fragment>
    );
  }
}
