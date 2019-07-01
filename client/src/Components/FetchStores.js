import React from 'react'

// const STORES = [{
//     id:
//     name:
//     address:
//     hours:
//     phone:
// }];

class FetchStores extends React.Component {
  // placeholder
  // content

  state = {
    stores: undefined
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ stores: STORES })
    }, 2000)
  }

  render() {
    const { stores } = this.state

    if (stores) {
      this.props.content(stores)
    } else {
      this.props.placeholder()
    }
  }
}

export default FetchStores
