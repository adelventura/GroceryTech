import React from 'react';
import FetchAssignment from '../../Model/FetchAssignment';
import Loading from '../../Components/Loading';
import { userManager } from '../../App';
import Config from '../../Config/Config';

export default class ViewAssignmentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: undefined
    };
  }

  cell = (label, name, contents) => {
    return (
      <div className="flex-col">
        <div style={{ width: '100%' }}>
          <h3 className="form-input-label">{label}</h3>
          <input
            className="form-input"
            name={name}
            type="text"
            value={contents}
            disabled
          />
        </div>
      </div>
    );
  };

  save = () => {
    const { id } = this.props.match.params;

    fetch(`${Config.baseUrl}/assignments/${id}`, {
      method: 'POST',
      headers: { Authorization: userManager.user.token },
      body: JSON.stringify(this.state)
    })
      .then(() => {
        this.props.history.replace(`/deliverer/account`);
      })
      .catch(error => {
        alert(error);
      });
  };

  onStatusChange = event => {
    this.setState({
      status: event.target.value
    });
  };

  render() {
    const orderID = this.props.match.params.id;
    console.log(orderID);
    return (
      <React.Fragment>
        <FetchAssignment
          id={orderID}
          placeholder={() => {
            return <Loading />;
          }}
          content={assignment => {
            return (
              <div>
                <div className="header-block">
                  <div className="page-header">Assignment Details</div>
                </div>
                <div
                  className="card block-centered"
                  style={{ width: '70%', maxWidth: '700px', marginTop: '25px' }}
                >
                  <div
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      marginBottom: '25px'
                    }}
                  >
                    <div style={{ width: '45%', float: 'left' }}>
                      {this.cell(
                        'Order Placed',
                        'orderTime',
                        `${assignment[0].orderPlacedTime}`
                      )}
                      {this.cell(
                        'Delivery Time',
                        'deliveryTime',
                        `${assignment[0].deliveryTime}`
                      )}
                      {this.cell(
                        'Buyer Address',
                        'buyerAddress',
                        `${assignment[0].buyerAddress}`
                      )}
                      {this.cell(
                        'Store Name',
                        'storeName',
                        `${assignment[0].storeName}`
                      )}

                      <div className="flex-col">
                        <div style={{ width: '100%' }}>
                          <h3 className="form-input-label">Delivery Status</h3>
                          <select
                            name="status"
                            className="select"
                            value={this.state.deliveryTime}
                            onChange={this.onDeliveryTimeChange}
                          >
                            <option value="pending">Pending</option>
                            <option value="complete">Complete</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* right Col */}
                    <div
                      style={{
                        width: '46%',
                        float: 'right'
                      }}
                    >
                      <table
                        className="mini-tbl"
                        style={{ paddingTop: '5px', marginBottom: '40px' }}
                      >
                        <div
                          className="form-input-label"
                          style={{ marginBottom: '0px' }}
                        >
                          <th
                            style={{
                              width: '30%',
                              borderBottom: '.5px solid #70C18C'
                            }}
                          >
                            Quantity
                          </th>
                          <th
                            style={{
                              width: '70%',
                              borderBottom: '.5px solid #70C18C'
                            }}
                          >
                            Item
                          </th>
                          <tbody>
                            {assignment.map(item => {
                              return (
                                <tr>
                                  <td
                                    style={{
                                      textAlign: 'center',
                                      border: '.5px solid #70C18C'
                                    }}
                                  >
                                    {item.itemQuantity}
                                  </td>
                                  <td
                                    style={{
                                      border: '.5px solid #70C18C'
                                    }}
                                  >
                                    {item.itemName}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </div>
                      </table>

                      <button
                        className="btn"
                        style={{
                          float: 'right',
                          marginTop: '50px'
                        }}
                        onClick={this.save}
                      >
                        Update Status
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </React.Fragment>
    );
  }
}
