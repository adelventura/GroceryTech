import React from 'react'

// {
//    id:
//    item_id:
//    quantity:
// }

//
//
//

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
