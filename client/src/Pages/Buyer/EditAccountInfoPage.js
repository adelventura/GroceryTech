import React from 'react';
import FetchStores from '../../Model/FetchStores';
import FetchBuyerAccount from '../../Model/FetchBuyerAccount';
import Config from '../../Config/Config';
import Loading from '../../Components/Loading';
import { userManager } from '../../App';

export default class EditAccountInfoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  save = () => {
    if (!this.state.email) {
      alert('enter an email');
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

    fetch(`${Config.baseUrl}/buyer/account/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(() => {
        this.props.history.replace(`/buyer/account`);
      })
      .catch(error => {
        alert(error);
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

  componentDidMount = () => {
    fetch(`${Config.baseUrl}/buyer/account`, {
      headers: { Authorization: userManager.user.token }
    })
      .then(response => response.json())
      .then(response => {
        var data = response[0];

        this.setState({
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          email: data.email,
          streetNumber: data.streetNumber,
          street: data.street,
          city: data.city,
          stateUS: data.stateUS,
          zipcode: data.zipcode,
          phone: data.phone,
          addressID: data.addressID,
          defaultPaymentName: data.defaultPaymentName,
          accountNumber: data.accountNumber,
          routingNumber: data.routingNumber,
          defaultStoreID: data.defaultStoreID
        });
      });
  };

  render() {
    if (!this.state) {
      return <div>Loading</div>;
    }
    console.log(JSON.stringify(this.state));
    return (
      <React.Fragment>
        <FetchBuyerAccount
          placeholder={() => {
            return <Loading />;
          }}
          content={accountInformation => {
            return (
              <div>
                <div className="header-block">
                  <div className="page-header">
                    Edit Your Account Information
                  </div>
                </div>
                <div
                  className="card block-centered"
                  style={{ marginTop: '25px' }}
                >
                  {accountInformation.map(account => {
                    return (
                      <div className="flex-col">
                        <div className="form-row">
                          <span style={{ float: 'left', width: '46%' }}>
                            <h3 className="form-input-label">First Name</h3>
                            <input
                              className="form-input"
                              name="firstName"
                              type="text"
                              style={{ backgroundColor: '#F6F6F6' }}
                              //   placeholder={account.firstName}
                              value={this.state.firstName}
                              disabled
                            />
                          </span>
                          <span style={{ float: 'right', width: '46%' }}>
                            <h3 className="form-input-label">Last Name</h3>
                            <input
                              className="form-input"
                              name="lastName"
                              type="text"
                              style={{ backgroundColor: '#F6F6F6' }}
                              //   placeholder={account.lastName}
                              value={this.state.lastName}
                              disabled
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
                              style={{ backgroundColor: '#F6F6F6' }}
                              //   placeholder={account.username}
                              value={this.state.username}
                              disabled
                            />
                          </span>
                          <span style={{ float: 'right', width: '46%' }}>
                            <h3 className="form-input-label">Email</h3>
                            <input
                              className="form-input"
                              name="email"
                              type="text"
                              //  placeholder={account.email}
                              value={this.state.email}
                              onChange={this.onEmailChange}
                            />
                          </span>
                        </div>

                        <div
                          className="form-row"
                          style={{ marginBottom: '30px' }}
                        />

                        <div className="form-row">
                          <span style={{ float: 'left', width: '46%' }}>
                            <h3 className="form-input-label">Street Number</h3>
                            <input
                              className="form-input"
                              name="streetNumber"
                              type="text"
                              // placeholder={account.streetNumber}
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
                              //  placeholder={account.street}
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
                              //  placeholder={account.city}
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
                              //   placeholder={account.stateUS}
                              value={this.state.stateUS}
                              onChange={this.onStateChange}
                            />
                          </span>
                        </div>

                        <div
                          className="form-row"
                          style={{ marginBottom: '20px' }}
                        >
                          <span style={{ float: 'left', width: '46%' }}>
                            <h3 className="form-input-label">Zipcode</h3>
                            <input
                              className="form-input"
                              name="zipcode"
                              type="text"
                              //  placeholder={account.zipcode}
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
                              //  placeholder={account.phone}
                              value={this.state.phone}
                              onChange={this.onPhoneChange}
                            />
                          </span>
                        </div>

                        <div
                          className="form-row"
                          style={{ marginBottom: '30px' }}
                        />

                        <div
                          className="form-row"
                          style={{ marginBottom: '20px' }}
                        >
                          <span style={{ float: 'left', width: '46%' }}>
                            <h3 className="form-input-label">
                              Default Payment Name
                            </h3>
                            <input
                              className="form-input"
                              name="defaultPaymentName"
                              type="text"
                              //  placeholder={account.defaultPaymentName}
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
                              //  placeholder={account.accountNumber}
                              value={this.state.accountNumber}
                              onChange={this.onAccountNumberChange}
                            />
                          </span>
                        </div>

                        <div
                          className="form-row"
                          style={{ marginBottom: '20px' }}
                        >
                          <div style={{ float: 'left', width: '46%' }}>
                            <h3 className="form-input-label">Routing Number</h3>
                            <input
                              className="form-input"
                              name="routingNumber"
                              type="text"
                              // placeholder={account.routingNumber}
                              value={this.state.routingNumber}
                              onChange={this.onRoutingNumberChange}
                            />
                          </div>
                        </div>
                        <div
                          className="form-row"
                          style={{ marginBottom: '30px' }}
                        />

                        <div
                          className="form-row"
                          style={{ marginBottom: '25px' }}
                        >
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
                                        <option value={store.addressID}>{`${
                                          store.name
                                        } - ${store.address}`}</option>
                                      );
                                    })}
                                  </select>
                                );
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex-row justify-between">
                    <button
                      className="btn"
                      onClick={this.delete}
                      style={{ margin: '25px' }}
                    >
                      Delete Account
                    </button>

                    <button
                      className="btn"
                      onClick={this.save}
                      style={{ margin: '25px' }}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </React.Fragment>
    );
  }
}
