import React from 'react';
import FetchItems from '../../../Model/FetchItems';
import Loading from '../../../Components/Loading';
import CartProvider from '../../../Model/Cart/CartProvider';
import RequiresAuthentication from '../../../Components/RequiresAuthentication';

export default class ItemListingPage extends React.Component {
  state = {
    selection: {}
  };

  quantityHandler = item => {
    return event => {
      let { selection } = this.state;
      selection[item.id] = {
        item: item,
        quantity: event.target.value
      };

      this.setState({ selection });
    };
  };

  updateCart = updater => {
    return () => {
      Object.keys(this.state.selection).forEach(key => {
        const selection = this.state.selection[key];

        updater({
          type: 'add',
          quantity: selection.quantity,
          item: selection.item
        });
      });
    };
  };

  render() {
    const { id, category } = this.props.match.params;
    return (
      <RequiresAuthentication>
        <CartProvider
          content={(cart, updater) => {
            return (
              <FetchItems
                id={id}
                category={category}
                placeholder={() => {
                  return <Loading />;
                }}
                content={items => {
                  return (
                    <div>
                      <br />
                      <span className="pageHeader">Inventory > </span>
                      {category}
                      <div className="tbl-card">
                        <table className="tbl">
                          <thead>
                            <tr className="table-header">
                              <th scope="col">Item Name</th>
                              <th scope="col">Description</th>
                              <th scope="col">Expiration Date</th>
                              <th scope="col">Price</th>
                              <th scope="col">In Stock</th>
                            </tr>
                          </thead>
                          {items.map(stock => {
                            return (
                              <tbody>
                                <tr>
                                  <td>
                                    <input
                                      type="number"
                                      onChange={this.quantityHandler(
                                        stock.item
                                      )}
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
                                  <td>{stock.item.expiration}</td>
                                  <td>{stock.item.price}</td>
                                  <td>{stock.quantity > 0 ? 'Yes' : 'NO!'}</td>
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
                              onClick={this.updateCart(updater)}
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
          }}
        />
      </RequiresAuthentication>
    );
  }
}
