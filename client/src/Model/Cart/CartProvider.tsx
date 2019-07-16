import React, { Component } from "react";
import Cart from "./Model/Cart";
import {
  CartDeleteAction,
  CartAddItemAction,
  CartDeleteItemAction
} from "./CartActions";
import Config from "../../Config/Config";

type CartAction = CartDeleteAction | CartAddItemAction | CartDeleteItemAction;

class CartProvider extends Component<{
  storeId: string;
  content: (
    cart: Cart,
    update: (action: CartAction) => void
  ) => React.ReactElement;
  placeholder: () => React.ReactElement;
}> {
  state: {
    cart: Cart | null;
  } = { cart: null };

  componentDidMount() {
    const id: String = this.props.storeId;

    fetch(`${Config.baseUrl}/store/${id}/cart`)
      .then(response => response.json())
      .then(data => this.setState({ cart: data }));
  }

  update = (action: CartAction) => {
    let cart = this.state.cart;
    if (!cart) {
      return;
    }

    switch (action.type) {
      case "add":
        cart.items.push({
          id: `${Math.floor(Math.random() * 100000)}`,
          item: action.item,
          quantity: action.quantity
        });
        alert(JSON.stringify(cart.items));
        break;
      case "delete":
        cart = {
          id: `${Math.floor(Math.random() * 100000)}`,
          items: []
        };
        break;
      case "delete_item":
        cart.items = cart.items.filter(item => {
          return item.id != action.id;
        });
        break;
    }

    this.setState({
      cart
    });
  };

  render() {
    const { cart } = this.state;

    if (cart) {
      return this.props.content(cart, this.update);
    } else {
      return this.props.placeholder();
    }
  }
}

export default CartProvider;
