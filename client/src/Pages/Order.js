import React from 'react'
import FetchStores from '../Components/FetchStores'
import cart from '../Images/shopping-cart.svg'
import IconLabelButton from '../Components/IconLabelButton'

class NewOrder extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span>List of Stores</span>
        <FetchStores
          placeholder={() => {
            return <div>LOADING</div>
          }}
          content={stores => {
            return (
              <table style={{ width: '100%' }}>
                <tr>
                  <th>Store Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Hours today</th>
                </tr>
                {stores.map(store => {
                  return (
                    <tr>
                      <td>
                        <IconLabelButton
                          link={`store/${store.id}`}
                          img={cart}
                          alt="Shopping Cart"
                          label={store.name}
                        />
                        {store.name}
                      </td>
                      <td>{store.address}</td>
                      <td>{store.phone}</td>
                      <td>{store.hours}</td>
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

export default NewOrder
