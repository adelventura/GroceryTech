import React from 'react';
import shoppingCart from '../Images/shopping-cart.svg';
import { Link } from 'react-router-dom';

export default function CartBadge(props) {
  return (
    <Link to={props.link}>
      <div className="circle">
        <img src={shoppingCart} alt="cart" />
      </div>
    </Link>
  );
}
