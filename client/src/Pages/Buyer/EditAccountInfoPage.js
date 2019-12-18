import React from 'react';
import FetchStores from '../../Model/FetchStores';
import FetchBuyerAccount from '../../Model/FetchBuyerAccount';
import Config from '../../Config/Config';
import Loading from '../../Components/Loading';
import { userManager } from '../../App';

export default class EditAccountInfoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
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
      storeAddress: '',
      storeAddressID: '',
      storeID: ''
    };
  }

  testEmail = email => {
    var pattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    return pattern.test(email);
  };

  save = () => {
    if (!this.state.email) {
      alert('enter an email');
      return;
    }
    if (!this.testEmail(this.state.email)) {
      alert('Please enter a valid email');
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
        // headers: { Authorization: userManager.user.token }
      },
      body: JSON.stringify(this.state)
    })
      .then(() => {
        console.log(JSON.stringify(this.state));
        this.props.history.replace(`/buyer/account`);
      })
      .catch(error => {
        alert(error);
      });
  };

  componentDidMount = () => {
    fetch(`${Config.baseUrl}/buyer/account`, {
      headers: { Authorization: userManager.user.token }
    })
      .then(response => response.json())
      .then(response => {
        var data = response;

        this.setState({
          firstName: data.account[0].firstName,
          lastName: data.account[0].lastName,
          username: data.account[0].username,
          email: data.account[0].email,
          streetNumber: data.account[0].streetNumber,
          street: data.account[0].street,
          city: data.account[0].city,
          stateUS: data.account[0].stateUS,
          zipcode: data.account[0].zipcode,
          phone: data.account[0].phone,
          addressID: data.account[0].addressID,
          defaultPaymentName: data.account[0].defaultPaymentName,
          accountNumber: data.account[0].accountNumber,
          routingNumber: data.account[0].routingNumber,
          storeName: data.store[0].storeName,
          storeAddress: data.store[0].storeAddress,
          storeAddressID: data.store[0].storeAddressID,
          storeID: data.store[0].storeID
        });
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
        <FetchBuyerAccount
          placeholder={() => {
            return <Loading />;
          }}
          content={accountInformation => {
            return (
              <div>
                <div className="header-block">
                  <div className="page-header">Your Account</div>
                </div>
                <div
                  className="card block-centered"
                  style={{ marginTop: '25px' }}
                >
                  <div className="flex-col">
                    <div className="form-row">
                      <span style={{ float: 'left', width: '46%' }}>
                        <h3 className="form-input-label">First Name</h3>
                        <input
                          className="form-input"
                          name="firstName"
                          style={{ backgroundColor: '#F6F6F6' }}
                          type="text"
                          value={this.state.firstName}
                          disabled
                        />
                      </span>
                      <span style={{ float: 'right', width: '46%' }}>
                        <h3 className="form-input-label">Last Name</h3>
                        <input
                          className="form-input"
                          name="lastName"
                          style={{ backgroundColor: '#F6F6F6' }}
                          type="text"
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
                          style={{ backgroundColor: '#F6F6F6' }}
                          type="text"
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
                          value={this.state.phone}
                          onChange={this.onPhoneChange}
                        />
                      </span>
                    </div>

                    <div
                      className="form-row"
                      style={{ marginBottom: '30px' }}
                    />

                    <div className="form-row" style={{ marginBottom: '20px' }}>
                      <span style={{ float: 'left', width: '46%' }}>
                        <h3 className="form-input-label">
                          Default Payment Name
                        </h3>
                        <input
                          className="form-input"
                          name="defaultPaymentName"
                          type="text"
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
                          value={this.state.routingNumber}
                          onChange={this.onRoutingNumberChange}
                        />
                      </div>
                    </div>
                    <div
                      className="form-row"
                      style={{ marginBottom: '30px' }}
                    />

                    <div className="form-row" style={{ marginBottom: '25px' }}>
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
                                  value={this.state.value}
                                  onChange={this.onDefaultStoreIDChange}
                                >
                                  <option
                                    value={accountInformation.store[0].storeID}
                                  >{`${
                                    accountInformation.store[0].storeName
                                  } - ${
                                    accountInformation.store[0].storeAddress
                                  }`}</option>
                                  {stores.map(store => {
                                    return (
                                      <option value={store.id}>{`${
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
                  </div>

                  <div className="flex-row justify-between">
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
