import React from 'react';
import FetchStores from '../../Model/FetchStores';
import Config from '../../Config/Config';

export default class RegisterBuyerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      streetNumber: '',
      street: '',
      city: '',
      stateUS: '',
      zipcode: '',
      phone: '',
      addressID: '',
      defaultPaymentName: '',
      accountNumber: '',
      routingNumber: '',
      defaultStoreID: ''
    };
  }

  testEmail = email => {
    var pattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    return pattern.test(email);
  };

  create = () => {
    if (!this.state.firstName) {
      alert('enter a first name');
      return;
    }

    if (!this.state.lastName) {
      alert('enter a last name ');
      return;
    }

    if (!this.state.username) {
      alert('enter a username');
      return;
    }

    if (!this.state.email) {
      alert('enter an email');
      return;
    }

    if (!this.testEmail(this.state.email)) {
      alert('Please enter a valid email');
      return;
    }

    if (!this.state.password) {
      alert('enter a password');
      return;
    }

    if (!this.state.confirmPassword) {
      alert('confirm your password');
      return;
    }

    if (!(this.state.password === this.state.confirmPassword)) {
      alert('password and confirm password must match');
      return;
    }

    if (!this.state.streetNumber) {
      alert('enter a street number');
      return;
    }
    if (!this.state.city) {
      alert('enter a city');
      return;
    }
    if (!this.state.stateUS) {
      alert('enter a state');
      return;
    }
    if (!this.state.zipcode) {
      alert('enter a zipcode');
      return;
    }
    if (!this.state.phone) {
      alert('enter a phone number');
      return;
    }
    if (!this.state.defaultPaymentName) {
      alert('enter a payment name');
      return;
    }
    if (!this.state.accountNumber) {
      alert('enter an account number');
      return;
    }
    if (!this.state.routingNumber) {
      alert('enter a routing number');
      return;
    }
    if (!this.state.defaultStoreID) {
      alert('select a default store');
      return;
    }

    fetch(`${Config.baseUrl}/buyer/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(() => {
        this.props.history.replace(`/`);
      })
      .catch(error => {
        alert(error);
      });
  };

  onFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  onLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  onUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  onPasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  onConfirmPasswordChange = event => {
    this.setState({
      confirmPassword: event.target.value
    });
  };

  onEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  onStreetNumberChange = event => {
    this.setState({
      streetNumber: event.target.value
    });
  };

  onStreetChange = event => {
    this.setState({
      street: event.target.value
    });
  };

  onCityChange = event => {
    this.setState({
      city: event.target.value
    });
  };

  onStateChange = event => {
    this.setState({
      stateUS: event.target.value
    });
  };

  onZipcodeChange = event => {
    this.setState({
      zipcode: event.target.value
    });
  };

  onPhoneChange = event => {
    this.setState({
      phone: event.target.value
    });
  };

  onDefaultPaymentNameChange = event => {
    this.setState({
      defaultPaymentName: event.target.value
    });
  };

  onAccountNumberChange = event => {
    this.setState({
      accountNumber: event.target.value
    });
  };

  onRoutingNumberChange = event => {
    this.setState({
      routingNumber: event.target.value
    });
  };

  onDefaultStoreIDChange = event => {
    this.setState({
      defaultStoreID: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="header-block">
          <div className="page-header">Register New Account</div>
        </div>
        <div className="card block-centered" style={{ marginTop: '25px' }}>
          <div className="flex-col">
            <div className="form-row">
              <span style={{ float: 'left', width: '46%' }}>
                <h3 className="form-input-label">First Name</h3>
                <input
                  className="form-input"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.onFirstNameChange}
                />
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                <h3 className="form-input-label">Last Name</h3>
                <input
                  className="form-input"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.onLastNameChange}
                />
              </span>
            </div>
            <div className="form-row">
              <span style={{ float: 'left', width: '46%' }}>
                <h3 className="form-input-label">Username</h3>
                <input
                  className="form-input"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.onUsernameChange}
                />
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                <h3 className="form-input-label">Email</h3>
                <input
                  className="form-input"
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
              </span>
            </div>

            <div className="form-row">
              <span style={{ float: 'left', width: '46%' }}>
                <h3 className="form-input-label">Password</h3>
                <input
                  className="form-input"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                />
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                <h3 className="form-input-label">Confirm Password</h3>
                <input
                  className="form-input"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confim password"
                  value={this.state.confirmPassword}
                  onChange={this.onConfirmPasswordChange}
                />
              </span>
            </div>
            <div className="form-row" style={{ marginBottom: '30px' }} />

            <div className="form-row">
              <span style={{ float: 'left', width: '46%' }}>
                <h3 className="form-input-label">Street Number</h3>
                <input
                  className="form-input"
                  name="streetNumber"
                  type="text"
                  placeholder="Street number"
                  value={this.state.streetNumber}
                  onChange={this.onStreetNumberChange}
                />
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                <h3 className="form-input-label">Street</h3>
                <input
                  className="form-input"
                  name="street"
                  type="text"
                  placeholder="Street"
                  value={this.state.street}
                  onChange={this.onStreetChange}
                />
              </span>
            </div>
            <div className="form-row">
              <span style={{ float: 'left', width: '46%' }}>
                <h3 className="form-input-label">City</h3>
                <input
                  className="form-input"
                  name="city"
                  type="text"
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.onCityChange}
                />
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                <h3 className="form-input-label">State</h3>
                <input
                  className="form-input"
                  name="stateUS"
                  type="text"
                  placeholder="State"
                  value={this.state.stateUS}
                  onChange={this.onStateChange}
                />
              </span>
            </div>
            <div className="form-row" style={{ marginBottom: '20px' }}>
              <span style={{ float: 'left', width: '46%' }}>
                <h3 className="form-input-label">Zipcode</h3>
                <input
                  className="form-input"
                  name="zipcode"
                  type="text"
                  placeholder="Zipcode"
                  value={this.state.zipcode}
                  onChange={this.onZipcodeChange}
                />
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                <h3 className="form-input-label">Phone Number</h3>
                <input
                  className="form-input"
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                  value={this.state.phoneNumber}
                  onChange={this.onPhoneChange}
                />
              </span>
            </div>
            <div className="form-row" style={{ marginBottom: '30px' }} />

            <div className="form-row" style={{ marginBottom: '20px' }}>
              <span style={{ float: 'left', width: '46%' }}>
                <h3 className="form-input-label">Default Payment Name</h3>
                <input
                  className="form-input"
                  name="defaultPaymentName"
                  type="text"
                  placeholder="Default payment name"
                  value={this.state.defaultPaymentName}
                  onChange={this.onDefaultPaymentNameChange}
                />
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                <h3 className="form-input-label">Account Number</h3>
                <input
                  className="form-input"
                  name="accountNumber"
                  type="text"
                  placeholder="Account number"
                  value={this.state.accountNumber}
                  onChange={this.onAccountNumberChange}
                />
              </span>
            </div>

            <div className="form-row" style={{ marginBottom: '20px' }}>
              <div style={{ float: 'left', width: '46%' }}>
                <h3 className="form-input-label">Routing Number</h3>
                <input
                  className="form-input"
                  name="routingNumber"
                  type="text"
                  placeholder="Routing number"
                  value={this.state.routingNumber}
                  onChange={this.onRoutingNumberChange}
                />
              </div>
            </div>
            <div className="form-row" style={{ marginBottom: '30px' }} />

            <div className="form-row" style={{ marginBottom: '25px' }}>
              <div style={{ float: 'left', width: '46%' }}>
                <h3 className="form-input-label">Default Store</h3>
                <FetchStores
                  content={stores => {
                    return (
                      <select
                        name="defaultStore"
                        className="select"
                        value={this.state.defaultStoreID}
                        onChange={this.onDefaultStoreIDChange}
                      >
                        {stores.map(store => {
                          return (
                            <option value={store.id}>{`${store.name} - ${
                              store.address
                            }`}</option>
                          );
                        })}
                      </select>
                    );
                  }}
                />
              </div>
            </div>

            <button
              className="btn"
              onClick={this.create}
              style={{ float: 'right' }}
            >
              Create Account
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
