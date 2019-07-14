import React from "react";
import CartProvider from "../../Model/Cart/CartProvider";
import Loading from "../../Components/Loading";
import { RouteComponentProps } from "react-router";
import Router from "react-router-dom";

type RouteParams = {
  storeID: string;
};

interface Props
  extends RouteComponentProps<RouteParams>,
    React.Props<RouteParams> {}

export default class ViewCartPage extends React.Component<Props> {
  render() {
    const storeID = this.props.match.params.storeID;

    return (
      <React.Fragment>
        <CartProvider
          storeId={storeID}
          placeholder={() => {
            return <Loading />;
          }}
          content={cart => {
            return (
              <div>
                <br />
                <span className="pageHeader">Cart </span>
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
                    {cart.items.map(item => {
                      return (
                        <tbody>
                          <tr>
                            <td>{item.item.name}</td>
                            <td>{item.item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{item.item.price}</td>
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
      </React.Fragment>
    );
  }
}
