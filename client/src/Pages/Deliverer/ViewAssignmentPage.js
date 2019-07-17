import React from 'react';
import FetchAssignment from '../../Model/FetchAssignment';

export default class ViewAssignmentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: undefined
    };
  }

  onClick = event => {
    this.props.history.push('/home');
  };

  cell = (label, name, contents) => {
    return (
      <div className="flex-col">
        <div style={{ width: '100%' }}>
          <h3 className="form-input-label">{label}</h3>
          <input
            className="form-input"
            name={name}
            type="text"
            placeholder={contents}
            disabled
          />
        </div>
      </div>
    );
  };

  render() {
    const orderID = this.props.match.params.id;
    console.log(orderID);
    return (
      <React.Fragment>
        <FetchAssignment
          id={orderID}
          content={assignment => {
            return (
              <div>
                <div className="page-header">Assignment Details</div>
                <div className="card block-centered" style={{ width: '70%' }}>
                  {assignment.map(content => {
                    return (
                      <div style={{ width: '50%', float: 'left' }}>
                        {this.cell(
                          'Order Placed',
                          'orderTime',
                          `${content.orderTime}`
                        )}
                        {this.cell(
                          'Delivery Time',
                          'deliveryTime',
                          `${content.deliveryTime}`
                        )}
                        {this.cell(
                          'Buyer Address',
                          'buyerAddress',
                          `${content.buyerAddress}`
                        )}
                        {this.cell(
                          'Store Name',
                          'storeName',
                          `${content.storeName}`
                        )}
                        {this.cell('Status', 'status', 'Pending')}
                      </div>
                    );
                  })}

                  {/* right Col */}
                  <div style={{ width: '50%', float: 'right' }}>
                    <div className="flex-col">
                      <div className="flex-row" style={{ width: '100%' }}>
                        <h3 className="form-input-label">Item</h3>
                        <h3 className="form-input-label">Quantity</h3>
                      </div>

                      <div style={{ width: '100%' }}>
                        <input
                          className="form-input"
                          name="deliverTime"
                          type="text"
                          placeholder="Delivery time"
                          disabled
                        />
                      </div>

                      <div style={{ width: '100%' }}>
                        <input
                          className="form-input"
                          name="deliverer"
                          type="text"
                          placeholder="Deliverer's Name"
                          disabled
                        />
                      </div>

                      <div style={{ width: '100%' }}>
                        <input
                          className="form-input"
                          name="number-items"
                          type="text"
                          placeholder="Number of items"
                          disabled
                        />
                      </div>

                      <div style={{ width: '100%' }}>
                        <input
                          className="form-input"
                          name="order-time"
                          type="text"
                          placeholder="Time of order"
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
                    Update Status
                  </button>
                </div>
              </div>
            );
          }}
        />
      </React.Fragment>
    );
  }
}
