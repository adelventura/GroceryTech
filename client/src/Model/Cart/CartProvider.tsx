import React, { Component } from "react";

var CART = {
  id: "",
  items: [
    {
      id: "",
      quantity: 10,
      item: {
        id: "000",
        type: "Beverages",
        name: "Twinings Tea",
        description: "English Breakfast Tea",
        price: 3.99
      }
    }
  ]
};

interface Item {
  id: String;
  name: string;
  type: string;
  description: string;
  price: number;
}

interface CartItem {
  id: string;
  quantity: number;
  item: Item;
}

interface Cart {
  id: string;
  items: CartItem[];
}

// Delete the cart
interface CartDeleteAction {
  type: "delete";
}

// Add an item to cart
interface CartAddItemAction {
  type: "add";

  // item id
  item: Item;
  quantity: number;
}

// Delete an item
interface CartDeleteItemAction {
  type: "delete_item";

  // cart item id
  id: string;
}

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
    setTimeout(() => {
      this.setState({ cart: CART });
    }, 200);
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
