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
        <div className="header-block">
          <div className="page-header">Your Deliverer Homepage</div>
        </div>
        <div className="grid-container-row">
          {this.button(
            '/assignments',
            'Assignments',
            FaClipboardList,
            '#a9eec2'
          )}
          {this.button(
            '/deliverer/account',
            'Account Information',
            FaUserEdit,
            '#705772'
          )}
        </div>
      </React.Fragment>
    );
  }
}
