import React from 'react'

// render props
// highor order componets
// context
//
// and how to use these
// api tutorials with react stuff

class Login extends React.Component {
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
export default Login
