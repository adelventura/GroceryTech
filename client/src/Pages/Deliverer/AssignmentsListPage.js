import React from 'react';
import FetchAssignments from '../../Model/FetchAssignments';

export default class AssignmentsListPage extends React.Component {
  render() {
    return (
      <FetchAssignments
        content={assignments => {
          return (
            <div>
              <br />
              <div className="header-block">
                <div className="page-header">Assignments</div>
              </div>{' '}
              <div className="tbl-card" style={{ marginTop: '25px' }}>
                <table className="tbl">
                  <thead>
                    <tr className="table-header">
                      <th scope="col">Store Name</th>
                      <th scope="col">Order ID</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time Order Made</th>
                      <th scope="col">Time of Delivery</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total Number of Items</th>
                    </tr>
                  </thead>
                  {assignments.map(assignment => {
                    return (
                      <tbody>
                        <tr>
                          <td>{assignment.storeName}</td>
                          <td>{assignment.orderID}</td>
                          <td>{assignment.date}</td>
                          <td>{assignment.orderTime}</td>
                          <td>{assignment.deliveryTime}</td>
                          <td>{assignment.totalPrice}</td>
                          <td>{assignment.totalItems}</td>
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
