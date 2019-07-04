import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaShoppingCart,
  FaClock,
  FaCreditCard,
  FaUserEdit
} from 'react-icons/fa'
import cart from '../../Images/shopping-cart.svg'
import clock from '../../Images/clock.svg'
import user from '../../Images/user.svg'
import dollarSign from '../../Images/dollar-sign.svg'
import IconLabelButton from '../../Components/IconLabelButton.js'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p className="pageHeader">
          Customer Homepage <br />
        </p>
        <div className="grid-container-row">
          <Link to="/order">
            <div className="grid-container">
              <div className="grid-upper">
                <FaShoppingCart color="#a9eec2" size={140} className="icon" />
              </div>
              <div className="grid-lower">
                <p className="grid-header">New Order</p>
              </div>
            </div>
          </Link>

          <Link to="/order_history">
            <div className="grid-container">
              <div className="grid-upper">
                <FaClock color="#705772 " size={140} className="icon" />
              </div>
              <div className="grid-lower">
                <p className="grid-header">Order History</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid-container-row">
          <Link to="/account">
            <div className="grid-container">
              <div className="grid-upper">
                <FaUserEdit color="#f38181" size={140} className="icon" />
              </div>
              <div className="grid-lower">
                <p className="grid-header">Account Information</p>
              </div>
            </div>
          </Link>

          <Link to="/payment_methods">
            <div className="grid-container">
              <div className="grid-upper">
                <FaCreditCard color="#fad284" size={140} className="icon" />
              </div>
              <div className="grid-lower">
                <p className="grid-header">Payment Methods</p>
              </div>
            </div>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
