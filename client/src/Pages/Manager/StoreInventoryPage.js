import React from 'react';
import FetchInventory from '../../Model/FetchInventory';
import RequiresAuthentication from '../../Components/RequiresAuthentication';
import Loading from '../../Components/Loading';

//store/:id/inventory

export default class StoreInventoryPage extends React.Component {
  state = {
    storeName: undefined,
    storeID: undefined
  };

  // quantityHandler = item => {
  //   return event => {
  //     let { selection } = this.state;
  //     selection[item.id] = {
  //       item: item,
  //       quantity: event.target.value
  //     };

  //     this.setState({ selection });
  //   };
  // };

  // updateCart = updater => {
  //   return () => {
  //     Object.keys(this.state.selection).forEach(key => {
  //       const selection = this.state.selection[key];

  //       updater({
  //         type: 'add',
  //         quantity: selection.quantity,
  //         item: selection.item
  //       });
  //     });
  //   };
  // };

  render() {
    const id = this.props.match.params;
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
                <span className="page-header">Inventory > </span>
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
                    {items.map(stock => {
                      return (
                        <tbody>
                          <tr>
                            <td>
                              <input
                                type="number"
                                // onChange={this.quantityHandler(stock.item)}
                                id="quatity"
                                name="quantity"
                                min="0"
                                max="100"
                                placeholder="0"
                                style={{
                                  marginRight: '8px',
                                  borderColor: 'coral',
                                  borderWidth: '.5px',
                                  outline: 'none'
                                }}
                              />
                              {stock.item.name}
                            </td>
                            <td>{stock.item.description}</td>
                            <td>{stock.quantity}</td>
                            <td>{stock.item.retailPrice}</td>
                            <td>{stock.item.wholesalePrice}</td>
                            <td>{stock.item.expiration}</td>
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
                        //onClick={this.updateCart(updater)}
                        style={{
                          display: 'inline-block',
                          marginLeft: 'auto',
                          marginRight: '0'
                        }}
                      >
                        View Item
                      </button>
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
