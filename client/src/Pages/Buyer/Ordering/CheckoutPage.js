import React from 'react';
import FetchPaymentMethods from '../../../Model/FetchPaymentMethods';
import RequiresAuthentication from '../../../Components/RequiresAuthentication';
import { userManager } from '../../../App';
import Config from '../../../Config/Config';

export default class CheckoutPage extends React.Component {
  state = {
    deliveryTime: 'ASAP'
  };

  onPaymentMethodChange = event => {
    this.setState({
      paymentMethod: event.target.value
    });
  };

  onDeliveryTimeChange = event => {
    this.setState({
      deliveryTime: event.target.value
    });
  };

  onDeliveryInstructionsChange = event => {
    this.setState({
      deliveryInstructions: event.target.value
    });
  };

  handleOrder = event => {
    if (!this.state.paymentMethod) {
      alert('select a payment method');
      return;
    }
    console.log('test');

    console.log(userManager.user.store);

    var request = {
      ...this.state,
      storeId: userManager.user.store,
      items: Object.values(userManager.user.cart).map(item => {
        return {
          id: item.item.id,
          quantity: item.quantity
        };
      })
    };

    fetch(`${Config.baseUrl}/checkout`, {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        Authorization: userManager.user.token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        userManager.clearCart();
        this.props.history.replace(`/checkout/receipt/${data.orderID}`);
      })
      .catch(error => {
        alert(error);
      });
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
                        <select
                          name="payment-method"
                          className="select"
                          value={this.state.paymentMethod}
                          onChange={this.onPaymentMethodChange}
                        >
                          {paymentMethods.map(paymentMethod => {
                            {
                              console.log(JSON.stringify(paymentMethods));
                            }
                            return (
                              <option value={paymentMethod.name}>
                                {paymentMethod.default
                                  ? 'Default (' + paymentMethod.name + ')'
                                  : paymentMethod.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div>
                        <div className="form-input-label">Delivery Time</div>
                        <select
                          name="delivery-time"
                          className="select"
                          value={this.state.deliveryTime}
                          onChange={this.onDeliveryTimeChange}
                        >
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

                    <div className="block-centered" style={{ width: '100%' }}>
                      <div>
                        <div className="form-input-label">
                          Delivery Instructions
                        </div>
                        <textarea
                          className="delivery-instruc"
                          placeholder="Instructions for delivery"
                          value={this.state.deliveryInstructions}
                          onChange={this.onDeliveryInstructionsChange}
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
