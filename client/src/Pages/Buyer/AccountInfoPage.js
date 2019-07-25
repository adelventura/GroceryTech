import React from 'react';
import FetchStores from '../../Model/FetchStores';
import FetchBuyerAccount from '../../Model/FetchBuyerAccount';
import Loading from '../../Components/Loading';
import { userManager } from '../../App';
import Config from '../../Config/Config';

export default class AccountInfoPage extends React.Component {
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
      defaultStoreID: '',
      storeAddress: '',
      storeAddressID: '',
      storeID: ''
    };
  }

  update = () => {
    this.props.history.replace(`/buyer/account/update`);
  };

  delete = () => {
    fetch(`${Config.baseUrl}/buyer/account/delete`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { Authorization: userManager.user.token }
    }).then(() => {
      userManager.update(null);
      this.props.history.replace('/');
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
                          type="text"
                          placeholder={accountInformation.account[0].firstName}
                          disabled
                        />
                      </span>
                      <span style={{ float: 'right', width: '46%' }}>
                        <h3 className="form-input-label">Last Name</h3>
                        <input
                          className="form-input"
                          name="lastName"
                          type="text"
                          placeholder={accountInformation.account[0].lastName}
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
                          placeholder={accountInformation.account[0].username}
                          disabled
                        />
                      </span>
                      <span style={{ float: 'right', width: '46%' }}>
                        <h3 className="form-input-label">Email</h3>
                        <input
                          className="form-input"
                          name="email"
                          type="text"
                          placeholder={accountInformation.account[0].email}
                          onChange={this.onEmailChange}
                          disabled
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
                          placeholder={
                            accountInformation.account[0].streetNumber
                          }
                          onChange={this.onStreetNumberChange}
                          disabled
                        />
                      </span>
                      <span style={{ float: 'right', width: '46%' }}>
                        <h3 className="form-input-label">Street</h3>
                        <input
                          className="form-input"
                          name="street"
                          type="text"
                          placeholder={accountInformation.account[0].street}
                          onChange={this.onStreetChange}
                          disabled
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
                          placeholder={accountInformation.account[0].city}
                          onChange={this.onCityChange}
                          disabled
                        />
                      </span>
                      <span style={{ float: 'right', width: '46%' }}>
                        <h3 className="form-input-label">State</h3>
                        <input
                          className="form-input"
                          name="stateUS"
                          type="text"
                          placeholder={accountInformation.account[0].stateUS}
                          onChange={this.onStateChange}
                          disabled
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
                          placeholder={accountInformation.account[0].zipcode}
                          onChange={this.onZipcodeChange}
                          disabled
                        />
                      </span>
                      <span style={{ float: 'right', width: '46%' }}>
                        <h3 className="form-input-label">Phone Number</h3>
                        <input
                          className="form-input"
                          name="phone"
                          type="text"
                          placeholder={accountInformation.account[0].phone}
                          onChange={this.onPhoneChange}
                          disabled
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
                          placeholder={
                            accountInformation.account[0].defaultPaymentName
                          }
                          onChange={this.onDefaultPaymentNameChange}
                          disabled
                        />
                      </span>
                      <span style={{ float: 'right', width: '46%' }}>
                        <h3 className="form-input-label">Account Number</h3>
                        <input
                          className="form-input"
                          name="accountNumber"
                          type="text"
                          placeholder={
                            accountInformation.account[0].accountNumber
                          }
                          onChange={this.onAccountNumberChange}
                          disabled
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
                          placeholder={
                            accountInformation.account[0].routingNumber
                          }
                          onChange={this.onRoutingNumberChange}
                          disabled
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
                                  disabled
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
                      onClick={this.delete}
                      style={{ margin: '25px' }}
                    >
                      Delete Account
                    </button>
                    <button
                      className="btn"
                      onClick={this.update}
                      style={{ margin: '25px' }}
                    >
                      Update Account
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
