import React from 'react'
import { History } from 'react-router-dom'

export default class RegisterDelivererPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      confirmationCode: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    return this.props.history.push('/home')
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="register-card">
          <div className="card-header">Tell us about yourself</div>
          <br />
          <br />
          <div className="form-row">
            <span style={{ float: 'left' }}>
              <h3 className="form-input-label">First Name</h3>
              <input
                className="form-input"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </span>
            <span style={{ float: 'right' }}>
              <h3 className="form-input-label">Last Name</h3>
              <input
                className="form-input"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </span>
          </div>
          <div className="form-row">
            <span style={{ float: 'left' }}>
              <h3 className="form-input-label">Username</h3>
              <input
                className="form-input"
                name="username"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </span>
            <span style={{ float: 'right' }}>
              <h3 className="form-input-label">Email</h3>
              <input
                className="form-input"
                name="email"
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </span>
          </div>

          <div className="form-row">
            <span style={{ float: 'left' }}>
              <h3 className="form-input-label">Password</h3>
              <input
                className="form-input"
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </span>
            <span style={{ float: 'right' }}>
              <h3 className="form-input-label">Confirm Password</h3>
              <input
                className="form-input"
                name="confirmPassword"
                type="password"
                placeholder="Confim password"
                /* value={this.state.password}
            onChange={this.handleChange} */
              />
            </span>
          </div>

          <div className="form-row">
            <span style={{ float: 'left' }}>
              <h3 className="form-input-label">Phone</h3>
              <input
                className="form-input"
                name="phone"
                type="text"
                placeholder="Phone number"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </span>
            <span style={{ float: 'right' }}>
              <h3 className="form-input-label">Confirmation Code</h3>
              <input
                className="form-input"
                name="confirmationCode"
                type="text"
                placeholder="Confirmation code"
                value={this.state.confirmationCode}
                onChange={this.handleChange}
              />
            </span>
          </div>
          <button
            className="btn"
            onClick={this.handleSubmit}
            style={{ float: 'right' }}
          >
            Create Account
          </button>
        </div>
      </React.Fragment>
    )
  }
}
