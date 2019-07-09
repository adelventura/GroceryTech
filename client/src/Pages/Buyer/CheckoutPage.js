import React from 'react'

export default class CheckoutPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="pageHeader">Checkout</h3>

        <div className="checkout-card">
          <div className="flex-col-container">
            <div class="block-centered">
              <div style={{ float: 'left' }}>
                <h3 className="form-input-label">Payment</h3>
                <select name="payment-method" className="select">
                  <option value="default">Default</option>
                  <option value="not default">No</option>
                </select>
              </div>

              <div style={{ float: 'right', clear: 'right' }}>
                <h3 className="form-input-label">Delivery Time</h3>
                <select name="delivery-time" className="select">
                  <option value="asap">ASAP</option>
                  <option value="1 hour">In 1 hour</option>
                  <option value="2 hours">In 2 hours</option>
                  <option value="5 hours">In 5 hours</option>
                  <option value="10 hours">In 10 hours</option>
                  <option value="12 hours">In 12 hours</option>
                  <option value="24 hours">In 24 hours</option>
                </select>
              </div>
            </div>

            <div class="block-centered">
              <div style={{ float: 'right' }}>
                <h3 className="form-input-label">Total Price</h3>
                <input
                  className="total-price"
                  name="total-price"
                  type="text"
                  placeholder="$50.21"
                  disabled
                />
              </div>
            </div>

            <div class="block-centered">
              <div>
                <h3 className="form-input-label">Delivery Instructions</h3>
                <textarea
                  className="delivery-instruc"
                  placeholder="Instructions for delivery"
                />
              </div>
            </div>
          </div>
          <div style={{ float: 'right' }}>
            <button className="btn">Finalize Order</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
