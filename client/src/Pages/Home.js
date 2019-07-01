import React from 'react'
import cart from '../Images/shopping-cart.svg'
import clock from '../Images/clock.svg'
import user from '../Images/user.svg'
import dollarSign from '../Images/dollar-sign.svg'
import IconLabelButton from '../Components/IconLabelButton.js'

class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div>
          <p>
            Homepage <br />
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <IconLabelButton
            linkTo="new_order"
            img={cart}
            alt="Shopping Cart"
            label="New Order"
          />
          <IconLabelButton
            linkTo="order_history"
            img={clock}
            alt="Clock"
            label="Order History"
          />
          <IconLabelButton
            linkTo="account"
            img={user}
            alt="User"
            label="Account Information"
          />
          <IconLabelButton
            linkTo="payments"
            img={dollarSign}
            alt="Dollar Sign"
            label="Payment Methods"
          />
        </div>
      </div>
    )
  }
}

export default Home
