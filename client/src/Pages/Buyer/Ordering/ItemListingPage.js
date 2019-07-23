import React from 'react';
import FetchItems from '../../../Model/FetchItems';
import Loading from '../../../Components/Loading';
import CartBadge from '../../../Components/CartBadge';
import RequiresAuthentication from '../../../Components/RequiresAuthentication';
import { userManager } from '../../../App';

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

  updateCart = () => {
    console.log('updating');
    Object.keys(this.state.selection).forEach(key => {
      const selection = this.state.selection[key];
      userManager.user.cart[key] = {
        item: selection.item,
        quantity: selection.quantity
      };
    });
  };

  render() {
    const { id, category } = this.props.match.params;
    return (
      <RequiresAuthentication>
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
                <div className="header-block">
                  <div className="page-header">Inventory > {category}</div>
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
                    {items.map(item => {
                      return (
                        <tbody>
                          <tr>
                            <td style={{ textAlign: 'left' }}>
                              <input
                                type="number"
                                onChange={this.quantityHandler(item)}
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
                              {item.name}
                            </td>
                            <td>{item.description}</td>
                            <td>{item.expiration}</td>
                            <td>{item.retailPrice}</td>
                            <td>{item.quantity > 0 ? 'Yes' : 'NO!'}</td>
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
                        onClick={this.updateCart}
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
      </RequiresAuthentication>
    );
  }
}
