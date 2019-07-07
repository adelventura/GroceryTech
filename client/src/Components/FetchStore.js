import React from 'react'

const INVENTORY = [
  {
    quantity: 10,
    item: {
      id: '001',
      type: 'beverage',
      name: 'Dasani Water',
      description: '1.5L bottled water',
      price: '4.69',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 10,
    item: {
      id: '012',
      type: 'beverage',
      name: 'Sprite',
      description: 'Lemon lime soft drinks, 12 fl oz, 12 pack',
      price: '3.99',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 10,
    item: {
      id: '013',
      type: 'beverage',
      name: 'Coke',
      description: 'Coca Cola cherry coke, 12 oz, 12 pack',
      price: '3.98',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 10,
    item: {
      id: '014',
      type: 'canned goods',
      name: 'Bushs Vegetarian Baked Beans',
      description: 'Pepsi, bottles 16.9 fl oz, 6 pack',
      price: '2.48',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 10,
    item: {
      id: '015',
      type: 'canned goods',
      name: 'Green Giant Sweet Peas',
      description: 'Diet Lipton Green Tea, citrus, 12 count, 16.9 fl oz',
      price: '4.98',
      expiration: 'Dec-2020',
      in_stock: true
    }
  },
  {
    quantity: 10,
    item: {
      id: '016',
      type: 'canned goods',
      name: 'Hunts Diced Tomatoes',
      description: '1.5L bottled water',
      price: '1.69',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 10,
    item: {
      id: '017',
      type: 'produce',
      name: 'Meyer Lemon',
      description: 'Lemon lime soft drinks, 12 fl oz, 12 pack',
      price: '0.99',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 10,
    item: {
      id: '018',
      type: 'produce',
      name: 'Green Kale',
      description: 'Coca Cola cherry coke, 12 oz, 12 pack',
      price: '1.98',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 10,
    item: {
      id: '019',
      type: 'produce',
      name: 'Honecrisp Apple',
      description: 'Pepsi, bottles 16.9 fl oz, 6 pack',
      price: '1.29',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 10,
    item: {
      id: '020',
      type: 'dairy',
      name: 'Sargento Mild Cheddar Cheese',
      description: 'Diet Lipton Green Tea, citrus, 12 count, 16.9 fl oz',
      price: '3.88',
      expiration: 'Dec-2020',
      in_stock: true
    }
  },
  {
    quantity: 10,
    item: {
      id: '021',
      type: 'dairy',
      name: 'Chobani Yogurt',
      description: '1.5L bottled water',
      price: '2.33',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 10,
    item: {
      id: '022',
      type: 'dairy',
      name: 'Mayfield 2% Milk',
      description: 'Lemon lime soft drinks, 12 fl oz, 12 pack',
      price: '2.99',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 10,
    item: {
      id: '023',
      type: 'baking goods',
      name: 'Domino Brown Sugar',
      description: 'Coca Cola cherry coke, 12 oz, 12 pack',
      price: '3.98',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 10,
    item: {
      id: '024',
      type: 'baking goods',
      name: 'Clabber Girl Baking Powder',
      description: 'Pepsi, bottles 16.9 fl oz, 6 pack',
      price: '2.98',
      expiration: 'Dec-2020'
    }
  },
  {
    quantity: 10,
    item: {
      id: '025',
      type: 'baking goods',
      name: 'White Lily All-Purpose Flour',
      description: 'Diet Lipton Green Tea, citrus, 12 count, 16.9 fl oz',
      price: '5.51',
      expiration: 'Dec-2020',
      in_stock: true
    }
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
      store: undefined
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const store = STORES.find(store => {
        return store.id == this.props.id
      })
      this.setState({ store: store })
    }, 100)
  }

  render() {
    const { store } = this.state

    if (store) {
      return this.props.content(store)
    } else {
      return this.props.placeholder()
    }
  }
}

export default FetchStore
