import React from 'react'

const STORES = [
  {
    id: '001',
    name: 'Publix',
    address: '900 West Peachtree St NW, Atlanta, GA, 30309',
    hours: '7-11',
    phone: '404-253-3544'
  },
  {
    id: '002',
    name: 'Kroger',
    address: 'Howell Mill Square, Atlanta, GA, 30318',
    hours: '6-10',
    phone: '404-355-7889'
  },
  {
    id: '003',
    name: 'Costco',
    address: 'Town Brookhaven, Atlanta, GA, 30319',
    hours: '8-4',
    phone: '404-751-0605'
  },
  {
    id: '004',
    name: 'Sprouts',
    address: '1845 Piedmont Ave NE, Ste 500, Atlanta, GA,30324',
    hours: '9-8',
    phone: '404-751-0605'
  },
  {
    id: '005',
    name: 'Whole Foods',
    address: '650 Ponce de Leon Ave NE, Atlanta, GA, 30308',
    hours: '9-8',
    phone: '404-853-1681',
    inventory: []
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
    }, 2000)
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
