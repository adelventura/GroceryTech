import React from 'react';
import FetchInventory from '../../Model/FetchInventory';
import RequiresAuthentication from '../../Components/RequiresAuthentication';
import Loading from '../../Components/Loading';

//store/:id/inventory

export default class StoreInventoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
      selectedId: '',
      storeID: ''
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
      alert('Must select item to continue');
    } else {
      const { selectedId } = this.state;
      //this.props.history.push(`store/${selectedId}`);
      this.props.history.push('/home');
    }
  };

  render() {
    const { id } = this.props.match.params;
    const selectedId = this.state.selectedId;

    return (
      <div>
        <FetchInventory
          id={id}
          placeholder={() => {
            return <Loading />;
          }}
          content={items => {
            return (
              <div>
                <br />
                <div className="header-block">
                  <div className="page-header">Inventory</div>
                </div>
                <div className="tbl-card">
                  <table className="tbl">
                    <thead>
                      <tr className="table-header">
                        <th scope="col">Item Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Retail Price</th>
                        <th scope="col">Wholesale Price</th>
                        <th scope="col">Expiration Date</th>
                      </tr>
                    </thead>
                    {items.map(item => {
                      return (
                        <tbody>
                          <tr>
                            <td style={{ textAlign: 'left' }}>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{item.retailPrice}</td>
                            <td>{item.wholesalePrice}</td>
                            <td>{item.expiration}</td>
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
                      {/* <button
                        className="btn"
                        //onClick={this.updateCart(updater)}
                        style={{
                          display: 'inline-block',
                          marginLeft: 'auto',
                          marginRight: '0'
                        }}
                      >
                        View Item
                      </button> */}
                    </div>
                  </div>
                </div>
                <br />
                <br />
              </div>
            );
          }}
        />
      </div>
    );
  }
}
