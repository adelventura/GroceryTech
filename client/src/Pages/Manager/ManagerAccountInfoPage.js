import React from 'react';
import Loading from '../../Components/Loading';
import FetchManagerAccount from '../../Model/FetchManagerAccount';
import { userManager } from '../../App';
import Config from '../../Config/Config';

export default class ManagerAccountInfoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      store: '',
      storeAddress: ''
    };
  }

  update = () => {
    this.props.history.replace(`/manager/account/update`);
  };

  delete = () => {
    fetch(`${Config.baseUrl}/manager/account/delete`, {
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
                              placeholder={account.firstName}
                              disabled
                            />
                          </span>
                          <span style={{ float: 'right', width: '46%' }}>
                            <h3 className="form-input-label">Last Name</h3>
                            <input
                              className="form-input"
                              name="lastName"
                              type="text"
                              placeholder={account.lastName}
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
                              placeholder={account.username}
                              disabled
                            />
                          </span>
                          <span style={{ float: 'right', width: '46%' }}>
                            <h3 className="form-input-label">Email</h3>
                            <input
                              className="form-input"
                              name="email"
                              type="text"
                              placeholder={account.email}
                              value={this.state.email}
                              onChange={this.handleChange}
                              disabled
                            />
                          </span>
                        </div>

                        <div className="form-row">
                          <span style={{ float: 'left', width: '46%' }}>
                            <h3 className="form-input-label">Assigned Store</h3>
                            <input
                              className="form-input"
                              name="storeName"
                              type="text"
                              placeholder={account.storeName}
                              disabled
                            />
                          </span>
                          <span style={{ float: 'right', width: '46%' }}>
                            <h3 className="form-input-label">Store Address</h3>
                            <input
                              className="form-input"
                              name="storeAddress"
                              type="text"
                              placeholder={account.storeAddress}
                              value={this.state.email}
                              onChange={this.handleChange}
                              disabled
                            />
                          </span>
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
              style={{ marginLeft: '0px', marginRight: 'auto' }}
              onClick={this.delete}
            >
              Delete Account
            </button>
            <button
              className="btn"
              style={{ marginRight: '0px', marginLeft: 'auto' }}
              onClick={this.update}
            >
              Update Account
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
