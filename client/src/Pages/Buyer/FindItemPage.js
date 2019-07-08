import React from 'react'
import SmallNavCard from '../../Components/SmallNavCard.js'
import {
  FaCheese,
  FaCarrot,
  FaGlassWhiskey,
  FaBirthdayCake,
  FaDrumstickBite,
  FaTooth,
  FaPastafarianism,
  FaBroom,
  FaSnowflake,
  FaShoppingBasket
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

let purple = '#705772'
let coral = '#f38181'
let yellow = '#fad284'
let green = '#a9eec2'

class FindItemPage extends React.Component {
  handleCategory = category => {
    return () => {
      const { id } = this.props.match.params
      this.props.history.push(`/store/${id}/search/${category}`)
    }
  }

  button = (label, iconComponent, iconColor) => {
    return (
      <SmallNavCard
        onClick={this.handleCategory(label)}
        icon={iconComponent({ color: iconColor, size: 50, className: 'icon' })}
        label={label}
      />
    )
  }

  render() {
    return (
      <React.Fragment>
        <p className="pageHeader">
          Item Lookup <br />
        </p>
        <div className="grid">
          <div className="grid-column-left">
            {this.button('Beverages', FaGlassWhiskey, coral)}
            {this.button('Baking Goods', FaBirthdayCake, yellow)}
            {this.button('Canned Goods', FaShoppingBasket, purple)}
            {this.button('Cleaning Products', FaBroom, green)}
            {this.button('Dairy', FaCheese, coral)}
            />
          </div>

          <div className="grid-column-right">
            {this.button('Frozen Foods', FaSnowflake, purple)}
            {this.button('Meat', FaDrumstickBite, coral)}
            {this.button('Personal Care', FaTooth, green)}
            {this.button('Produce', FaCarrot, yellow)}
            {this.button('Other', FaPastafarianism, purple)}
          </div>
        </div>

        <Link to="/home">
          <div
            className="btn"
            style={{ display: 'block', marginRight: '20%', marginLeft: 'auto' }}
          >
            Checkout
          </div>
        </Link>
      </React.Fragment>
    )
  }
}

export default FindItemPage
