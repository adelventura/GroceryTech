import React from 'react';
import { FaUserEdit, FaClipboardList } from 'react-icons/fa';
import NavCard from '../../Components/NavCard.js';

export default class DelivererHomePage extends React.Component {
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
          Your Deliverer Homepage <br />
        </p>
        <div className="grid-container-row">
          {this.button('/store', 'Assignments', FaClipboardList, '#a9eec2')}
          {this.button(
            '/order_history',
            'Account Information',
            FaUserEdit,
            '#705772'
          )}
        </div>
      </React.Fragment>
    );
  }
}
