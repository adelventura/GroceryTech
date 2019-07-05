import React from 'react'
import {
  FaShoppingCart,
  FaClock,
  FaCreditCard,
  FaUserEdit
} from 'react-icons/fa'
import NavCard from '../../Components/NavCard.js'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p className="pageHeader">
          Customer Homepage <br />
        </p>
        <div className="grid-container-row">
          <NavCard
            link="/order"
            icon={
              <FaShoppingCart color="#a9eec2" size={140} className="icon" />
            }
            label="New Order"
          />
          <NavCard
            link="/order_history"
            icon={<FaClock color="#705772 " size={140} className="icon" />}
            label="Order History"
          />
        </div>

        <div className="grid-container-row">
          <NavCard
            link="/account"
            icon={<FaUserEdit color="#f38181" size={140} className="icon" />}
            label="Account Information"
          />
          <NavCard
            link="/payment_methods"
            icon={<FaCreditCard color="#fad284" size={140} className="icon" />}
            label="Payment Methods"
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Home
