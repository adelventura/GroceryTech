import React from 'react'
import cart from '../Images/shopping-cart.svg'
import clock from '../Images/clock.svg'
import user from '../Images/user.svg'
import FetchStore from '../Components/FetchStore'
import IconLabelButton from '../Components/IconLabelButton'

class StorePage extends React.Component {
  render() {
    const { id } = this.props.match.params
    return (
      <div>
        <FetchStore
          id={id}
          placeholder={() => {
            return <div>LOADING STORE</div>
          }}
          content={store => {
            return (
              <div>
                <p> Welcome to {store.name} </p>
                <IconLabelButton
                  link={`${id}/search`}
                  img={cart}
                  alt="Shopping Cart"
                  label="New Order"
                />
                <IconLabelButton
                  link="order_history"
                  img={clock}
                  alt="Clock"
                  label="Order History"
                />
                <IconLabelButton
                  link="account"
                  img={user}
                  alt="User"
                  label="Account Information"
                />
              </div>
            )
          }}
        />
      </div>
    )
  }
}

export default StorePage
