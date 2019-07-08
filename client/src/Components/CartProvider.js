import React from 'react'

var CART = [
  {
    id: '',
    quantity: 10,
    item: {
      type: '',
      name: '',
      description: '',
      price: ''
    },
    in_stock: true
  }
]

/* <CartProvider content={(cart, update) => {
    cart.items.map((item) => {
        <li>
            {item.name}
            <Button onPress={() => {
            update({type: "delete", id: item.id})
            }}>
                X
            </Button>
        </li>
    })
}}/> */

class CartProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: undefined
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ cart: CART })
    }, 2000)
  }

  render() {
    const { cart } = this.state

    if (cart) {
      return this.props.content(cart, change => {
        // apply change to cart
        // {type: "delete", item: "id"}
        if (type == 'delete') {
          setState
        }
      })
    } else {
      return this.props.placeholder()
    }
  }
}

// Cart - Component

// Component
// order_history

// Comonent
// account
//  - 1 basic account info
//  - 2 create/delete card
//  - 1 update default card
//

// place order (id)
//   steps:
//      1. update store inventory
//          - rollback/fail the order if needed
//      2. create order object
///         - the cart
//          - the time placed
//          - driver? or seperate table for driver orders joined with order?
//      3. cart goes to
//          1. users order history
//          2. assigned to a random delivery drivers order queue
//          3. added to the stores order history
//      4.
//

class AccountProvider extends React.Component {
  render() {
    const { account } = this.state

    account.cards
    account.currentCard

    return this.props.content(account, cardChangeCallback)
  }
}
