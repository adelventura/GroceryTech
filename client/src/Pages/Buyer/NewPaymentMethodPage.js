import React from 'react';
import Config from '../../Config/Config';
import { userManager } from '../../App';

export default class NewPaymentMethodPage extends React.Component {
  state = {
    isDefault: true
  };

  create = () => {
    if (!this.state.name) {
      alert('enter a name');
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

    fetch(`${Config.baseUrl}/account/payment_methods`, {
      method: 'POST',
      headers: {
        Authorization: userManager.user.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(data => this.setState({ paymentMethods: data }));
  };

  onNameChange = event => {
    this.setState({
      name: event.target.value
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

  onIsDefaultChange = event => {
    this.setState({
      isDefault: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="header-block">
          <div className="page-header">Add a New Payment Method</div>
        </div>{' '}
        <div
          className="card block-centered"
          style={{
            width: '30%',
            marginTop: '25px'
          }}
        >
          <div className="flex-col">
            <div
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingTop: '20px',
                width: '100%'
              }}
            >
              <h3 className="form-input-label">Payment Name</h3>
              <input
                className="form-input"
                name="paymentName"
                type="text"
                placeholder="Payment name"
                value={this.state.name}
                onChange={this.onNameChange}
              />
            </div>
            <br />
            <div
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%'
              }}
            >
              <h3 className="form-input-label">Account Number</h3>
              <input
                className="form-input"
                name="accountNumber"
                type="text"
                placeholder="Account number"
                value={this.state.accountNumber}
                onChange={this.onAccountNumberChange}
              />
            </div>
            <br />

            <div
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%'
              }}
            >
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
            <br />

            <div style={{ width: '100%' }}>
              <div
                style={{
                  display: 'block',
                  width: '30%',
                  marginRight: 'auto',
                  marginLEft: 'auto'
                }}
              >
                <h3 className="form-input-label">Default?</h3>

                <select
                  name="default"
                  className="select"
                  value={this.state.isDefault}
                  onChange={this.onIsDefaultChange}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
            <br />
            <div
              style={{
                width: '100%'
              }}
            >
              <button
                className="btn"
                style={{
                  marginTop: '10px',
                  marginBottom: '10px',
                  display: 'block',
                  float: 'right',
                  width: '100px'
                }}
                onClick={this.create}
              >
                Add Payment
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
