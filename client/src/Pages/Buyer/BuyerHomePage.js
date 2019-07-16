import React from 'react';
import {
  FaShoppingCart,
  FaClock,
  FaCreditCard,
  FaUserEdit
} from 'react-icons/fa';
import NavCard from '../../Components/NavCard.js';
import RequiresAuthentication from '../../Components/RequiresAuthentication.js';

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
      <RequiresAuthentication>
        <p className="page-header">
          Your Buyer Homepage <br />
        </p>
        <div className="grid-container-row">
          {this.button('/store', 'New Order', FaShoppingCart, '#F25F5C')}
          {this.button(
            '/account/order_history',
            'Order History',
            FaClock,
            '#70C18C'
          )}
        </div>

        <div className="grid-container-row">
          {this.button(
            '/account',
            'Account Information',
            FaUserEdit,
            '#247BA0'
          )}
          {this.button(
            '/account/payment_methods',
            'Payment Methods',
            FaCreditCard,
            '#FFE066'
          )}
        </div>
      </RequiresAuthentication>
    );
  }
}
