import React from 'react'

;[
  {
    id: '011',
    quantity: 10,
    item: {
      type: 'beverage',
      name: 'Dasani Water',
      description: '1.5L bottled water',
      price: '4.69'
    },
    in_stock: true
  },
  {
    id: '012',
    quantity: 10,
    item: {
      type: 'beverage',
      name: 'Sprite',
      description: 'Lemon lime soft drinks, 12 fl oz, 12 pack',
      price: '3.99'
    },
    in_stock: true
  },
  {
    id: '013',
    quantity: 10,
    item: {
      type: 'beverage',
      name: 'Coke',
      description: 'Coca Cola cherry coke, 12 oz, 12 pack',
      price: '3.98'
    },
    in_stock: true
  },
  {
    id: '014',
    quantity: 10,
    item: {
      type: 'beverage',
      name: 'Pepsi',
      description: 'Pepsi, bottles 16.9 fl oz, 6 pack',
      price: '3.48'
    },
    in_stock: true
  },
  {
    id: '015',
    quantity: 10,
    item: {
      type: 'beverage',
      name: 'Lipton Tea',
      description: 'Diet Lipton Green Tea, citrus, 12 count, 16.9 fl oz',
      price: '4.98'
    },
    in_stock: true
  }
]

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
