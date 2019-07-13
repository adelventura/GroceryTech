import React from 'react'

function disableEdits(inputs) {
  var length = inputs.length
  while (length--) {
    inputs[length].disabled = true
  }
}

function enableEdits(inputs) {
  var length = inputs.length
  while (length--) {
    inputs[length].disabled = false
  }
}

export default class AccountInfoPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Fezzik',
      lastName: 'DelVentura',
      username: 'fez_rulez',
      email: 'tyler_droolz@gmail.com',
      password: 'password',
      address: '123 North St',
      city: 'Atlanta',
      state: 'GA',
      zipcode: '30003',
      phoneNumber: '123-456-7890'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleUpdate() {
    let inputs = document.getElementsByTagName('input')
    return enableEdits(inputs)
  }

  handleDelete() {
    alert('Not available')
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
          <form>
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
                  disabled
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
                  disabled="true"
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
                  disabled="true"
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
                  disabled="true"
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
                  disabled="true"
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
                  disabled="true"
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
                  disabled="true"
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
                  disabled="true"
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
                  disabled="true"
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
                  disabled="true"
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
                disabled="true"
              />
            </div>
          </form>
          <button
            className="btn"
            onClick={this.handleDelete}
            style={{ float: 'right' }}
          >
            Delete Account
          </button>
          <button
            className="btn"
            onClick={this.handleUpdate}
            style={{ float: 'right' }}
          >
            Update Account
          </button>
        </div>
      </React.Fragment>
    )
  }
}
