import React from 'react';
import Loading from '../../Components/Loading';
import FetchManagerAccount from '../../Model/FetchManagerAccount';
import FetchStores from '../../Model/FetchStores';
import Config from '../../Config/Config';
import { userManager } from '../../App';

export default class ManagerAccountInfoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      storeName: '',
      storeAddress: '',
      storeAddressID: '',
      storeID: ''
    };
  }
  componentDidMount = () => {
    fetch(`${Config.baseUrl}/manager/account`, {
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
          storeName: data.storeName,
          storeAddress: data.storeAddress,
          storeID: data.storeID,
          storeAddressID: data.storeAddressID
        });
      });
  };

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
    fetch(`${Config.baseUrl}/manager/account/update`, {
      method: 'POST',
      headers: { Authorization: userManager.user.token },
      body: JSON.stringify(this.state)
    })
      .then(() => {
        this.props.history.replace(`/manager/account`);
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

  onStoreIDChange = event => {
    this.setState({
      storeAddressID: event.target.value
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="header-block">
          <div className="page-header"> Your Account Information</div>
        </div>
        <div className="card block-centered">
          <FetchManagerAccount
            placeholder={() => {
              return <Loading />;
            }}
            content={accountInformation => {
              return (
                <div>
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
                              value={account.firstName}
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
                              value={account.lastName}
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
                              value={account.username}
                              disabled
                            />
                          </span>
                          <span style={{ float: 'right', width: '46%' }}>
                            <h3 className="form-input-label">Email</h3>
                            <input
                              className="form-input"
                              name="email"
                              value={this.state.email}
                              onChange={this.onEmailChange}
                            />
                          </span>
                        </div>

                        <div
                          className="form-row"
                          style={{ marginBottom: '25px' }}
                        >
                          <div style={{ float: 'left', width: '46%' }}>
                            <h3 className="form-input-label">Assigned Store</h3>
                            <FetchStores
                              content={stores => {
                                return (
                                  <select
                                    name="assignedStore"
                                    className="select"
                                    value={this.state.value}
                                    onChange={this.onStoreIDChange}
                                  >
                                    <option value={account.storeAddressID}>{`${
                                      account.storeName
                                    } - ${account.storeAddress}`}</option>
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
                </div>
              );
            }}
          />
          <div
            style={{
              width: '100%',
              display: 'flex',
              marginTop: '25px'
            }}
          >
            <button
              className="btn"
              style={{ marginRight: '0px', marginLeft: 'auto' }}
              onClick={this.save}
            >
              Save Changes
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
