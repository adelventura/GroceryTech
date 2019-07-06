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

const STORES = [
  {
    id: '001',
    name: 'Publix',
    address: '900 West Peachtree St NW, Atlanta, GA, 30309',
    hours: '7-11',
    phone: '404-253-3544',
    inventory: INVENTORY
  },
  {
    id: '002',
    name: 'Kroger',
    address: 'Howell Mill Square, Atlanta, GA, 30318',
    hours: '6-10',
    phone: '404-355-7889',
    inventory: INVENTORY
  },
  {
    id: '003',
    name: 'Costco',
    address: 'Town Brookhaven, Atlanta, GA, 30319',
    hours: '8-4',
    phone: '404-751-0605',
    inventory: INVENTORY
  },
  {
    id: '004',
    name: 'Sprouts',
    address: '1845 Piedmont Ave NE, Ste 500, Atlanta, GA,30324',
    hours: '9-8',
    phone: '404-751-0605',
    inventory: INVENTORY
  },
  {
    id: '005',
    name: 'Whole Foods',
    address: '650 Ponce de Leon Ave NE, Atlanta, GA, 30308',
    hours: '9-8',
    phone: '404-853-1681',
    inventory: INVENTORY
  }
]

class FetchStore extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: undefined
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const store = STORES.find(store => {
        return store.id === this.props.id
      })
      const inventory = store.inventory
      this.setState({ inventory: inventory })
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

export default FetchStore
