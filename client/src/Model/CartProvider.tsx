import React from "react";

var CART = [
  {
    id: "",
    quantity: 10,
    item: {
      type: "",
      name: "",
      description: "",
      price: ""
    },
    in_stock: true
  }
];

class CartProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ cart: CART });
    }, 2000);
  }

  render() {
    const { cart } = this.state;

    if (cart) {
      return this.props.content(cart, change => {
        // apply change to cart
        // {type: "delete", item: "id"}
        if (type == "delete") {
          setState;
        }
      });
    } else {
      return this.props.placeholder();
    }
  }
}
