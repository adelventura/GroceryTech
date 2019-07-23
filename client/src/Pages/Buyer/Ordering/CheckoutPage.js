import React from 'react';
import FetchPaymentMethods from '../../../Model/FetchPaymentMethods';
import RequiresAuthentication from '../../../Components/RequiresAuthentication';
import { userManager } from '../../../App';

export default class CheckoutPage extends React.Component {
  handleOrder = event => {
    this.props.history.push('/checkout/receipt');
  };

  render() {
    return (
      <RequiresAuthentication>
        <FetchPaymentMethods
          content={paymentMethods => {
            return (
              <div>
                <div className="header-block">
                  <div className="page-header">Checkout</div>
                </div>
                <div
                  className="card block-centered"
                  style={{ maxWidth: '700px' }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: '100%'
                    }}
                  >
                    <div
                      className="block-centered"
                      style={{
                        width: '150px',
                        fontSize: '20px',
                        textAlign: 'center'
                      }}
                    >
                      Order Details
                    </div>
                  </div>
                  <br />
                  <br />

                  <div className="flex-col-container">
                    <div className="justify-between">
                      <div>
                        <div className="form-input-label">Payment</div>
                        <select name="payment-method" className="select">
                          {paymentMethods.map(paymentMethod => {
                            return (
                              <option>
                                {paymentMethod.default
                                  ? 'Default (' + paymentMethod.name + ')'
                                  : paymentMethod.paymentName}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div>
                        <div className="form-input-label">Delivery Time</div>
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
                    <br />

                    <div className="justify-between">
                      <div> </div>
                      <div>
                        <div className="form-input-label">Total Price</div>
                        <input
                          className="total-price"
                          name="total-price"
                          type="text"
                          value={`$${Object.values(
                            userManager.user.cart
                          ).reduce((sum, item) => {
                            return sum + item.quantity * item.item.retailPrice;
                          }, 0)}`}
                          disabled
                        />
                      </div>
                    </div>

                    <div class="block-centered" style={{ width: '100%' }}>
                      <div>
                        <div className="form-input-label">
                          Delivery Instructions
                        </div>
                        <textarea
                          className="delivery-instruc"
                          placeholder="Instructions for delivery"
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ float: 'right' }}>
                    <button className="btn" onClick={this.handleOrder}>
                      Finalize Order
                    </button>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </RequiresAuthentication>
    );
  }
}
