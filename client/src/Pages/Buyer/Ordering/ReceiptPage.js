import React from 'react'
import { throwStatement } from '@babel/types'

export default class ReceiptPage extends React.Component {
  onClick = event => {
    this.props.history.push('/home')
  }
  render() {
    return (
      <React.Fragment>
        <div className="checkout-card">
          <div>
            <h3 className="form-input-label">Order Number</h3>
            <input
              className="form-input"
              name="order-number"
              type="text"
              placeholder="Order Number"
              disabled
            />
          </div>

          <div>
            <h3 className="form-input-label">Payment Name</h3>
            <input
              className="form-input"
              name="payment-name"
              type="text"
              placeholder="Payment Name"
              disabled
            />
          </div>

          <div>
            <h3 className="form-input-label">Deliverer's Name</h3>
            <input
              className="form-input"
              name="deliverer"
              type="text"
              placeholder="Deliverer's Name"
              disabled
            />
          </div>

          <div>
            <h3 className="form-input-label">Number of Items</h3>
            <input
              className="form-input"
              name="number-items"
              type="text"
              placeholder="Number of items"
              disabled
            />
          </div>

          <div>
            <h3 className="form-input-label">Time Order Placed</h3>
            <input
              className="form-input"
              name="order-time"
              type="text"
              placeholder="Time of order"
              disabled
            />
          </div>

          <div>
            <h3 className="form-input-label">Delivery Time</h3>
            <input
              className="form-input"
              name="delivery-time"
              type="text"
              placeholder="Delivery time"
              disabled
            />
          </div>
          <button
            className="btn"
            //onClick={this.handleUpdate}
            style={{ float: 'right' }}
            onClick={this.onClick}
          >
            Home
          </button>
        </div>
      </React.Fragment>
    )
  }
}
