import React from 'react'
import { Link } from 'react-router-dom'

class Landing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    alert('Name is: ' + this.state.firstName + ' ' + this.state.lastName)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="pageHeader">Login</div>

        <div className="login-card">
          <div className="inner-card">
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
            <div>
              <br />
              <Link to="/home">
                <div className="btn" style={{ float: 'left' }}>
                  Login
                </div>
              </Link>
              <Link to="/register">
                <div className="btn" style={{ float: 'right' }}>
                  Register
                </div>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Landing
