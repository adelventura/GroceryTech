import React from 'react';
import FetchItems from '../../../Model/FetchItems';
import Loading from '../../../Components/Loading';
import CartBadge from '../../../Components/CartBadge';
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
                      <div
                        style={{
                          width: '89%',
                          marginTop: '25px',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div className="page-header">
                          Inventory > {category}
                        </div>
                        <CartBadge
                          link={'/store/' + `${id}` + '/cart'}
                          style={{ display: 'block', float: 'right' }}
                        />
                      </div>
                      <div className="tbl-card">
                        <table className="tbl">
                          <thead>
                            <tr className="table-header">
                              <th scope="col" style={{ width: '23%' }}>
                                Item Name
                              </th>
                              <th scope="col" style={{ width: '35%' }}>
                                Description
                              </th>
                              <th scope="col" style={{ width: '20%' }}>
                                Expiration Date
                              </th>
                              <th scope="col" style={{ width: '10%' }}>
                                Price
                              </th>
                              <th scope="col" style={{ width: '12%' }}>
                                In Stock
                              </th>
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
                                  <td>{stock.item.retailPrice}</td>
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
