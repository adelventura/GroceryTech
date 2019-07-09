import React from 'react'

export default class NewPaymentMethodPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="pageHeader">Add a new payment method</div>
        <div
          style={{
            width: '30%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <div className="newPaymentCard">
            <div
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingTop: '20px'
              }}
            >
              <h3 className="form-input-label">Payment Name</h3>
              <input
                className="form-input"
                name="paymentName"
                type="text"
                placeholder="Payment name"
                // value={this.state.firstName}
                // onChange={this.handleChange}
              />
            </div>
            <br />
            <div
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <h3 className="form-input-label">Account Number</h3>
              <input
                className="form-input"
                name="accountNumber"
                type="text"
                placeholder="Account number"
                //value={this.state.firstName}
                //onChange={this.handleChange}
              />
            </div>
            <br />

            <div
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <h3 className="form-input-label">Routing Number</h3>
              <input
                className="form-input"
                name="routingNumber"
                type="text"
                placeholder="Routing number"
                // value={this.state.firstName}
                // onChange={this.handleChange}
              />
            </div>
            <br />

            <div
              style={{
                display: 'block',
                marginLeft: '12%',
                marginRight: 'auto'
              }}
            >
              <h3 className="form-input-label">Default?</h3>

              <select name="default" className="select">
                <option value="default">Yes</option>
                <option value="not default">No</option>
              </select>
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
                //onClick={this.handleNewPayment}
              >
                Add Payment
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
