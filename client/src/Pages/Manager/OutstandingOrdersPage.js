import React from 'react';
import FetchOutstandingOrders from '../../Model/FetchOutstandingOrders';

export default class OutstandingOrdersPage extends React.Component {
  render() {
    return (
      <FetchOutstandingOrders
        content={outstandingOrders => {
          return (
            <div>
              <br />
              <div className="page-header">Outstanding Orders</div>
              <div className="tbl-card">
                <table className="tbl">
                  <thead>
                    <tr className="table-header">
                      <th scope="col">Store Name</th>
                      <th scope="col">Store Address</th>
                      <th scope="col">Order ID</th>
                      <th scope="col">Date</th>
                      <th scope="col">Total Price</th>
                      <th scope="col">Total Number of Items</th>
                      <th scope="col">Delivery Address</th>
                    </tr>
                  </thead>
                  {outstandingOrders.map(order => {
                    return (
                      <tbody>
                        <tr>
                          <td>{order.storeName}</td>
                          <td>{order.storeAddress}</td>
                          <td>{order.orderID}</td>
                          <td>{order.date}</td>
                          <td>{order.totalPrice}</td>
                          <td>{order.totalItems}</td>
                          <td>{order.deliveryAddress}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                <br />
                <div
                  style={{
                    width: '90%',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      width: '15%'
                    }}
                  />
                  <div
                    style={{
                      display: 'inline-flex',
                      justifyContent: 'center',
                      width: '70%'
                    }}
                  >
                    <button className="btn">Previous</button>
                    <button className="btn">Next</button>
                  </div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignContent: 'end',
                      justifyContent: 'end',
                      width: '15%'
                    }}
                  >
                    <button
                      className="btn"
                      style={{
                        display: 'inline-block',
                        marginLeft: 'auto',
                        marginRight: '0'
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}
