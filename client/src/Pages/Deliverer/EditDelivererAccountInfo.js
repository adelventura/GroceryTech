import React from 'react';
import Loading from '../../Components/Loading';
import FetchDelivererAccount from '../../Model/FetchDelivererAccount';
import AccountInfoPage from '../Buyer/AccountInfoPage';
import { userManager } from '../../App';
import Config from '../../Config/Config';

export default class EditDelivererAccountInfoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: ''
    };
  }

  componentDidMount = () => {
    fetch(`${Config.baseUrl}/deliverer/account`, {
      headers: { Authorization: userManager.user.token }
    })
      .then(response => response.json())
      .then(response => {
        var data = response[0];

        this.setState({
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          email: data.email
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
    fetch(`${Config.baseUrl}/deliverer/account/update`, {
      method: 'POST',
      headers: {
        headers: { Authorization: userManager.user.token }
      },
      body: JSON.stringify(this.state)
    })
      .then(() => {
        this.props.history.replace(`/deliverer/account`);
      })
      .catch(error => {
        alert(error);
      });
  };

  delete = () => {
    alert('not available');
  };

  onEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="header-block">
          <div className="page-header">Your Account Information</div>
        </div>
        <div className="card block-centered">
          <FetchDelivererAccount
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
              marginTop: '30px'
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
