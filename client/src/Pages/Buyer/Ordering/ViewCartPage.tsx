import React from "react";
import { RouteComponentProps } from "react-router";
import RequiresAuthentication from "../../../Components/RequiresAuthentication";
import { userManager } from "../../../App";
import CartBadge from "../../../Components/CartBadge";

type RouteParams = {};

interface Props
  extends RouteComponentProps<RouteParams>,
    React.Props<RouteParams> {}

export default class ViewCartPage extends React.Component<
  Props,
  {
    toBeDeleted: number | undefined;
  }
> {
  constructor(props: RouteComponentProps<RouteParams>) {
    super(props);
  }

  checkout = () => {
    this.props.history.push(`/checkout`);
  };

  quantityChange = (itemId: any) => {
    return (event: any) => {
      if (userManager.user) {
        userManager.user.cart[itemId].quantity = event.target.value;
        this.setState({});
      }
    };
  };

  onChangeToBeDeleted = (event: any) => {
    this.setState({
      toBeDeleted: event.target.value
    });
  };

  delete = () => {
    const { toBeDeleted } = this.state;
    if (userManager.user && toBeDeleted) {
      delete userManager.user.cart[toBeDeleted];
    }

    // hack
    this.setState({});
  };

  render() {
    const cart = userManager.user && userManager.user.cart;

    return (
      <RequiresAuthentication>
        <div>
          <br />
          <div className="header-block">
            <div className="page-header">Your Cart</div>
          </div>
          <div className="tbl-card">
            <table className="tbl">
              <thead>
                <tr className="table-header">
                  <th scope="col">Item Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">In Stock</th>
                </tr>
              </thead>
              {cart &&
                Object.values(cart).map(item => {
                  return (
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="radio"
                            value={item.item.id}
                            onChange={this.onChangeToBeDeleted}
                          />
                          {item.item.name}
                        </td>
                        <td>{item.item.description}</td>
                        <td>
                          <input
                            type="number"
                            onChange={this.quantityChange(item.item.id)}
                            id="quatity"
                            name="quantity"
                            min="0"
                            max="100"
                            placeholder="0"
                            value={item.quantity}
                            style={{
                              marginRight: "8px",
                              borderColor: "coral",
                              borderWidth: ".5px",
                              outline: "none"
                            }}
                          />
                        </td>
                        <td>{item.item.retailPrice}</td>
                        <td>{item.quantity > 0 ? "Yes" : "No"}</td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
            <br />
            <div
              style={{
                width: "90%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  width: "15%"
                }}
              />
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  width: "70%"
                }}
              >
                <button className="btn">Previous</button>
                <button className="btn">Next</button>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignContent: "end",
                  justifyContent: "end",
                  width: "15%"
                }}
              >
                <button
                  className="btn"
                  style={{
                    display: "inline-block",
                    marginLeft: "auto",
                    marginRight: "0"
                  }}
                  onClick={this.delete}
                >
                  Delete
                </button>
                <button
                  className="btn"
                  style={{
                    display: "inline-block",
                    marginLeft: "auto",
                    marginRight: "0"
                  }}
                  onClick={this.checkout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </RequiresAuthentication>
    );
  }
}
