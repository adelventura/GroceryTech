import React from 'react';
import FetchOrderHistory from '../../../Model/FetchOrderHistory';
import RequiresAuthentication from '../../../Components/RequiresAuthentication';

export default class OrderHistoryPage extends React.Component {
  render() {
    return (
      <RequiresAuthentication>
        <FetchOrderHistory
          content={history => {
            return (
              <div>
                <br />
                <div className="header-block">
                  <div className="page-header">Order History</div>
                </div>
                <div className="tbl-card">
                  <table className="tbl">
                    <thead>
                      <tr className="table-header">
                        <th scope="col">Store Name</th>
                        <th scope="col">Order ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Total Number of Items</th>
                        <th scope="col">Delivered</th>
                      </tr>
                    </thead>
                    {history.map(order => {
                      return (
                        <tbody>
                          <tr>
                            <td>{order.storeName}</td>
                            <td>{order.orderID}</td>
                            <td>{order.date}</td>
                            <td>{order.totalPrice}</td>
                            <td>{order.totalItems}</td>
                            <td>{order.delivered > 0 ? 'Yes' : 'No'}</td>
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
                        marginBottom: '25px',
                        width: '100%'
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
                        View Order Details
                      </button>
                    </div>
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
