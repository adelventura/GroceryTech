import React from 'react';
import RequiresAuthentication from '../../../Components/RequiresAuthentication';
import FetchReceipt from '../../../Model/FetchReceipt';
import Loading from '../../../Components/Loading';

export default class ReceiptPage extends React.Component {
  onClick = () => {
    this.props.history.replace('/home');
  };

  render() {
    const { id } = this.props.match.params;

    return (
      <RequiresAuthentication>
        <div className="header-block">
          <div className="page-header">Receipt</div>
        </div>
        <div
          className="card block-centered"
          style={{ width: '40%', marginTop: '25px' }}
        >
          <FetchReceipt
            id={id}
            placeholder={() => {
              return <Loading />;
            }}
            content={receipt => {
              return (
                <div>
                  {console.log(
                    'receipt object ---> : ' + JSON.stringify(receipt)
                  )}
                  <div className="flex-col">
                    <div>
                      <div style={{ width: '100%', float: 'left' }}>
                        <h3 className="form-input-label">Order Number</h3>
                        <input
                          className="form-input"
                          name="order-number"
                          type="text"
                          value={receipt.orderDetails[0].orderID}
                          disabled
                        />
                      </div>

                      <div style={{ width: '100%', float: 'left' }}>
                        <h3 className="form-input-label">Payment Name</h3>
                        <input
                          className="form-input"
                          name="payment-name"
                          type="text"
                          value={receipt.paymentMethod[0].default_payment}
                          disabled
                        />
                      </div>

                      <div style={{ width: '100%', float: 'left' }}>
                        <h3 className="form-input-label">Deliverer's Name</h3>
                        <input
                          className="form-input"
                          name="deliverer"
                          type="text"
                          value={receipt.orderDetails[0].delivererName}
                          disabled
                        />
                      </div>

                      <div style={{ width: '100%', float: 'left' }}>
                        <h3 className="form-input-label">Number of Items</h3>
                        <input
                          className="form-input"
                          name="number-items"
                          type="text"
                          value={receipt.orderDetails[0].totalItems}
                          disabled
                        />
                      </div>

                      <div style={{ width: '100%', float: 'left' }}>
                        <h3 className="form-input-label">Time Order Placed</h3>
                        <input
                          className="form-input"
                          name="order-time"
                          type="text"
                          value={receipt.orderDetails[0].orderTime}
                          disabled
                        />
                      </div>

                      <div
                        style={{
                          width: '100%',
                          float: 'left',
                          marginBottom: '25px'
                        }}
                      >
                        <h3 className="form-input-label">Delivery Time</h3>
                        <input
                          className="form-input"
                          name="delivery-time"
                          type="text"
                          value={receipt.orderDetails[0].deliveryTime}
                          disabled
                        />
                      </div>
                    </div>
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
              );
            }}
          />
        </div>
      </RequiresAuthentication>
    );
  }
}
