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
        <input
          className="inputItem"
          name="firstName"
          type="text"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="inputItem"
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="inputItem"
          name="username"
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="inputItem"
          name="email"
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="inputItem"
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="inputItem"
          name="address"
          type="text"
          placeholder="Address"
          value={this.state.address}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="inputItem"
          name="city"
          type="text"
          placeholder="City"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="inputItem"
          name="state"
          type="text"
          placeholder="State"
          value={this.state.state}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="inputItem"
          name="zipcode"
          type="text"
          placeholder="Zipcode"
          value={this.state.zipcode}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="inputItem"
          name="phoneNumber"
          type="text"
          placeholder="Phone"
          value={this.state.phoneNumber}
          onChange={this.handleChange}
        />

        <button className="submit-btn" onClick={this.handleSubmit}>
          Create Account
        </button>
      </React.Fragment>
    )
  }
}

export default Form
