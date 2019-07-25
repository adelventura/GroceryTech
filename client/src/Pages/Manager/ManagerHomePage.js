import React from 'react';
import {
  FaUserEdit,
  FaCalculator,
  FaCashRegister,
  FaBoxes
} from 'react-icons/fa';
import NavCard from '../../Components/NavCard.js';

export default class ManagerHomePage extends React.Component {
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
        <div className="header-block">
          <div className="page-header"> Your Manager Homepage</div>
        </div>
        <div className="grid-container-row">
          {this.button(
            '/manager/store/revenue',
            'Revenue Report',
            FaCalculator,
            '#70C18C'
          )}
          {this.button(
            '/manager/account',
            'Account Information',
            FaUserEdit,
            '#F25F5C'
          )}
        </div>
        <div className="grid-container-row">
          {this.button('/store/inventory', 'Inventory', FaBoxes, '#247BA0')}
          {this.button(
            '/manager/orders',
            'Outstanding Orders',
            FaCashRegister,
            '#FFE066'
          )}
        </div>
      </React.Fragment>
    );
  }
}
