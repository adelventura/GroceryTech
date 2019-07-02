import React from 'react'
import cart from '../Images/shopping-cart.svg'
import clock from '../Images/clock.svg'
import user from '../Images/user.svg'
import dollarSign from '../Images/dollar-sign.svg'
import IconLabelButton from '../Components/IconLabelButton.js'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>
          Homepage <br />
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <IconLabelButton
              link="new_order"
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
            <IconLabelButton
              link="payments"
              img={dollarSign}
              alt="Dollar Sign"
              label="Payment Methods"
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
