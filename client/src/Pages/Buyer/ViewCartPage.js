import React from 'react'

class ViewCartPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span>Your Cart</span>

        <FetchStores
          placeholder={() => {
            return <div>LOADING</div>
          }}
          content={(cart, update) => {
            return (
              <table style={{ width: '100%' }}>
                <tr>
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>In Stock</th>
                </tr>
                {cart.map(cart => {
                  return (
                    <tr>
                      <td>{cart.name}</td>
                      <td>{cart.description}</td>
                      <td>{cart.quantity}</td>
                      <td>{cart.price}</td>
                      <td>{cart.inStock}</td>
                    </tr>
                  )
                })}
              </table>
            )
          }}
        />
      </React.Fragment>
    )
  }
}

export default ViewCartPage
