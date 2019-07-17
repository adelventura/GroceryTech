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

export default class DelivererAccountInfoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phoneNumber: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    return this.props.history.push('/home');
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-header"> Your Account Information</div>

        <div className="card block-centered">
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </span>
            </div>

            <div className="form-row" style={{ marginBottom: '25px' }}>
              <span style={{ float: 'left', width: '46%' }}>
                <h3 className="form-input-label">Phone</h3>
                <input
                  className="form-input"
                  name="phone"
                  type="phone"
                  placeholder="Phone"
                  /* value={this.state.password}
          onChange={this.handleChange} */
                />
              </span>
            </div>
          </div>
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
