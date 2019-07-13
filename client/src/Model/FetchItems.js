import React from 'react'

import { STORES } from './FetchStore'

export default class FetchItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: undefined
    }
  }

  componentDidMount() {
    const { id, category } = this.props

    setTimeout(() => {
      const store = STORES.find(store => {
        return store.id === this.props.id
      })

      const items = store.inventory.filter(item => {
        return item.item.type.toLowerCase() === category.toLowerCase()
      })

      this.setState({ items })
    }, 100)
  }

  render() {
    const { items } = this.state

    if (items) {
      return this.props.content(items)
    } else {
      return this.props.placeholder()
    }
  }
}
