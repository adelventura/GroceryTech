import React from 'react';
import FetchAssignments from '../../Model/FetchAssignments';
import Loading from '../../Components/Loading';

export default class AssignmentsListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
      selectedId: ''
    };
  }

  selectHandler = id => {
    return event => {
      this.setState({
        selected: event.target.value,
        selectedId: id
      });
    };
  };

  handleChoose = event => {
    if (this.state.selected === '') {
      alert('Must select assignment to continue');
    } else {
      const { selectedId } = this.state;
      this.props.history.push(`assignments/${selectedId}`);
    }
  };

  render() {
    const selectedId = this.state.selectedId;

    return (
      <FetchAssignments
        placeholder={() => {
          return <Loading />;
        }}
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
                      <tbody key={assignment.orderID}>
                        <tr>
                          <td style={{ textAlign: 'left' }}>
                            <form
                              style={{
                                display: 'inline'
                              }}
                            >
                              <input
                                type="radio"
                                name="assignment"
                                value={assignment.orderID}
                                checked={selectedId === assignment.orderID}
                                onChange={this.selectHandler(
                                  assignment.orderID
                                )}
                                onClick={this.selectHandler(assignment.orderID)}
                                style={{ marginRight: '5px' }}
                              />
                            </form>
                            {assignment.storeName}
                          </td>
                          <td>{assignment.orderID}</td>
                          <td>{assignment.date}</td>
                          <td>{assignment.timeOrderMade}</td>
                          <td>{assignment.timeDelivered}</td>
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
                    marginBottom: '25px',
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
                      onClick={this.handleChoose}
                    >
                      View Details
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
