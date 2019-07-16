import React from 'react';
import {
  FaShoppingCart,
  FaClock,
  FaCreditCard,
  FaUserEdit
} from 'react-icons/fa';
import NavCard from '../../Components/NavCard.js';

export default class BuyerHomePage extends React.Component {
  button = (link, label, iconComponent, iconColor) => {
    return (
      <NavCard
        link={link}
        icon={iconComponent({ color: iconColor, size: 120, className: 'icon' })}
        label={label}
      />
    );
  };

  render() {
    return (
      <React.Fragment>
        <p className="page-header">
          Your Buyer Homepage <br />
        </p>
        <div className="grid-container-row">
          {this.button('/store', 'New Order', FaShoppingCart, '#a9eec2')}
          {this.button(
            '/account/order_history',
            'Order History',
            FaClock,
            '#705772'
          )}
        </div>

        <div className="grid-container-row">
          {this.button(
            '/account',
            'Account Information',
            FaUserEdit,
            '#f38181'
          )}
          {this.button(
            '/account/payment_methods',
            'Payment Methods',
            FaCreditCard,
            '#fad284'
          )}
        </div>
      </React.Fragment>
    );
  }
}
