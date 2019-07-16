import React from 'react';

function disableEdits(inputs) {
  var length = inputs.length;
  while (length--) {
    inputs[length].disabled = true;
  }
}

function enableEdits(inputs) {
  var length = inputs.length;
  while (length--) {
    inputs[length].disabled = false;
  }
}

export default class AccountInfoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Fezzik',
      lastName: 'DelVentura',
      username: 'fez_rulez',
      email: 'tyler_droolz@gmail.com',
      password: 'password',
      address: '123 North St',
      city: 'Atlanta',
      state: 'GA',
      zipcode: '30003',
      phoneNumber: '123-456-7890'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleUpdate() {
    let inputs = document.getElementsByTagName('input');
    return enableEdits(inputs);
  }

  handleDelete() {
    alert('Not available');
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  formItem = (name, label) => {
    return (
      <div>
        <h3 className="form-input-label">{label}</h3>
        <input
          className="form-input"
          name={name}
          type="text"
          placeholder={label}
          value={this.state.label}
          onChange={this.handleChange}
          disabled
        />
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="page-header">Your Account Information</div>
        <div
          className="card block-centered"
          style={{
            overflow: 'auto',
            width: '55%'
          }}
        >
          <form className="flex-col" style={{ marginBottom: '35px' }}>
            <div className="form-row">
              <span style={{ float: 'left', width: '46%' }}>
                {this.formItem('firstName', 'First Name')}
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                {this.formItem('lastName', 'Last Name')}
              </span>
            </div>
            <div className="form-row">
              <span style={{ float: 'left', width: '46%' }}>
                {this.formItem('username', 'Username')}
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                {this.formItem('password', 'Password')}
              </span>
            </div>

            <div className="form-row">
              <span style={{ float: 'left', width: '46%' }}>
                {this.formItem('email', 'Email')}
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                {this.formItem('phoneNumber', 'Phone Number')}
              </span>
            </div>

            <div className="form-row">
              <span style={{ float: 'left', width: '46%' }}>
                {this.formItem('address', 'Address')}
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                {this.formItem('city', 'City')}
              </span>
            </div>
            <div className="form-row">
              <span style={{ float: 'left', width: '46%' }}>
                {this.formItem('state', 'State')}
              </span>
              <span style={{ float: 'right', width: '46%' }}>
                {this.formItem('zipcode', 'Zipcode')}
              </span>
            </div>
          </form>
          <div
            style={{
              width: '100%',
              display: 'flex'
            }}
          >
            <button
              className="btn"
              style={{ marginLeft: '0px', marginRight: 'auto' }}
              onClick={this.handleDelete}
            >
              Delete Account
            </button>
            <button
              className="btn"
              style={{ marginRight: '0px', marginLeft: 'auto' }}
              onClick={this.handleUpdate}
            >
              Update Account
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
