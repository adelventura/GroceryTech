import React from 'react';
import Config from '../../Config/Config';
import { userManager } from '../../App';
import FetchStores from '../../Model/FetchStores';

export default class RegisterManagerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      confirmationCode: '',
      store: ''
    };
  }

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

    if (!this.state.confirmationCode) {
      alert('enter a confirmation code');
      return;
    }
    if (!this.state.store) {
      alert('enter an assigned store');
      return;
    }

    fetch(`${Config.baseUrl}/manager/register`, {
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

  onConfirmationCodeChange = event => {
    this.setState({
      confirmationCode: event.target.value
    });
  };

  onStoreChange = event => {
    this.setState({
      store: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="header-block">
          <div className="page-header">Register New Manager Account</div>
        </div>
        <div className="card block-centered" style={{ marginTop: '25px' }}>
          <div className="card-header">Tell us about yourself</div>
          <br />
          <br />
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

            <div className="form-row">
              <span style={{ float: 'left', width: '46%' }}>
                <h3 className="form-input-label">Phone</h3>
                <input
                  className="form-input"
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                  value={this.state.phone}
                  //onChange={this.handleChange}
                />
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                <h3 className="form-input-label">Confirmation Code</h3>
                <input
                  className="form-input"
                  name="confirmationCode"
                  type="text"
                  placeholder="Confirmation code"
                  value={this.state.confirmationCode}
                  onChange={this.onConfirmationCodeChange}
                />
              </span>
            </div>
            <div className="form-row" style={{ marginBottom: '25px' }}>
              <span style={{ float: 'left', width: '46%' }}>
                <h3 className="form-input-label">Assign Store</h3>
                <FetchStores
                  content={stores => {
                    return (
                      <select
                        name="default"
                        className="select"
                        value={this.state.store}
                        onChange={this.onStoreChange}
                      >
                        {stores.map(store => {
                          return (
                            <option value={store.addressID}>{`${store.name} - ${
                              store.address
                            }`}</option>
                          );
                        })}
                      </select>
                    );
                  }}
                />
              </span>
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
      </React.Fragment>
    );
  }
}
