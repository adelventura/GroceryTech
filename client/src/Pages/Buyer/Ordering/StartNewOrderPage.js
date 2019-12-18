import React from 'react';
import FetchStores from '../../../Model/FetchStores';
import Loading from '../../../Components/Loading';
import RequiresAuthentication from '../../../Components/RequiresAuthentication';
import { userManager } from '../../../App';

export default class StartNewOrderPage extends React.Component {
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
      alert('Must select store to continue');
    } else {
      const { selectedId } = this.state;

      // reset the cart when choosing new store
      userManager.clearCart();
      userManager.user.store = selectedId;

      console.log(userManager.user.store);

      this.props.history.push(`store/${selectedId}`);
    }
  };

  render() {
    const selectedId = this.state.selectedId;

    return (
      <RequiresAuthentication>
        <FetchStores
          content={stores => {
            return (
              <div>
                <br />
                <div className="header-block">
                  <div className="page-header">List of Stores</div>
                </div>
                <div className="tbl-card">
                  <table className="tbl">
                    <thead>
                      <tr className="table-header">
                        <th scope="col">Store Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Hours today</th>
                      </tr>
                    </thead>
                    {stores.map(store => {
                      return (
                        <tbody key={store.id}>
                          <tr>
                            <th scope="row" style={{ textAlign: 'left' }}>
                              <form
                                style={{
                                  display: 'inline'
                                }}
                              >
                                <input
                                  type="radio"
                                  name="store"
                                  value={store.name}
                                  checked={selectedId === store.id}
                                  onChange={this.selectHandler(store.id)}
                                  onClick={this.selectHandler(store.id)}
                                  style={{ marginRight: '10px' }}
                                />
                              </form>
                              {store.name}
                            </th>
                            <td>{store.address}</td>
                            <td>{store.phone}</td>
                            <td>{store.hours}</td>
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
                        alignContent: 'end',
                        justifyContent: 'end',
                        width: '100%'
                      }}
                    >
                      <button
                        className="btn"
                        onClick={this.handleChoose}
                        style={{
                          display: 'inline-block',
                          marginLeft: 'auto',
                          marginRight: '0'
                        }}
                      >
                        Choose
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
