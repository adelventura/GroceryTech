import React from 'react'

const INVENTORY = [
  {
    id: '011',
    quantity: 10,
    type: 'beverage',
    name: 'Dasani Water',
    description: '1.5L bottled water',
    price: '4.69',
    expiration: 'Dec-2020',
    in_stock: true
  },
  {
    id: '012',
    quantity: 10,
    type: 'beverage',
    name: 'Sprite',
    description: 'Lemon lime soft drinks, 12 fl oz, 12 pack',
    price: '3.99',
    expiration: 'Dec-2020',
    in_stock: true
  },
  {
    id: '013',
    quantity: 10,
    type: 'beverage',
    name: 'Coke',
    description: 'Coca Cola cherry coke, 12 oz, 12 pack',
    price: '3.98',
    expiration: 'Dec-2020',
    in_stock: true
  },
  {
    id: '014',
    quantity: 10,
    type: 'beverage',
    name: 'Pepsi',
    description: 'Pepsi, bottles 16.9 fl oz, 6 pack',
    price: '3.48',
    expiration: 'Dec-2020',
    in_stock: true
  },
  {
    id: '015',
    quantity: 10,
    type: 'beverage',
    name: 'Lipton Tea',
    description: 'Diet Lipton Green Tea, citrus, 12 count, 16.9 fl oz',
    price: '4.98',
    expiration: 'Dec-2020',
    in_stock: true
  }
]

export default class FetchInventory extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: undefined
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ inventory: INVENTORY })
    }, 2000)
  }

  render() {
    const { inventory } = this.state

    if (inventory) {
      return this.props.content(inventory)
    } else {
      return this.props.placeholder()
    }
  }
}