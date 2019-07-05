import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      phoneNumber: ''
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
              <h3 className="form-input-label">Address</h3>
              <input
                className="form-input"
                name="address"
                type="text"
                placeholder="Address"
                value={this.state.address}
                onChange={this.handleChange}
              />
            </span>
            <span style={{ float: 'right' }}>
              <h3 className="form-input-label">City</h3>
              <input
                className="form-input"
                name="city"
                type="text"
                placeholder="City"
                value={this.state.city}
                onChange={this.handleChange}
              />
            </span>
          </div>
          <div className="form-row">
            <span style={{ float: 'left' }}>
              <h3 className="form-input-label">State</h3>
              <input
                className="form-input"
                name="state"
                type="text"
                placeholder="State"
                value={this.state.state}
                onChange={this.handleChange}
              />
            </span>
            <span style={{ float: 'right' }}>
              <h3 className="form-input-label">Zipcode</h3>
              <input
                className="form-input"
                name="zipcode"
                type="text"
                placeholder="Zipcode"
                value={this.state.zipcode}
                onChange={this.handleChange}
              />
            </span>
          </div>
          <div style={{ float: 'left', width: '100%' }}>
            <h3 className="form-input-label">Phone Number</h3>
            <input
              className="form-input"
              name="phoneNumber"
              type="text"
              placeholder="Phone number"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </div>
          <button
            className="btn-small"
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

export default Form
