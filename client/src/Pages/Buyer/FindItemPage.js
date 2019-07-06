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
  render() {
    return (
      <React.Fragment>
        <p className="pageHeader">
          Item Lookup <br />
        </p>
        <div className="grid">
          <div className="grid-column-left">
            <SmallNavCard
              link="/account"
              icon={<FaGlassWhiskey color={coral} size={50} className="icon" />}
              label="Beverages"
            />
            <SmallNavCard
              link="/account"
              icon={<FaBirthdayCake color={green} size={50} className="icon" />}
              label="Baking Goods"
            />
            <SmallNavCard
              link="/account"
              icon={
                <FaShoppingBasket color={yellow} size={50} className="icon" />
              }
              label="Canned Goods"
            />
            <SmallNavCard
              link="/account"
              icon={<FaBroom color={purple} size={50} className="icon" />}
              label="Cleaning Products"
            />
            <SmallNavCard
              link="/account"
              icon={<FaCheese color={coral} size={50} className="icon" />}
              label="Dairy"
            />
          </div>

          <div className="grid-column-right">
            <SmallNavCard
              link="/account"
              icon={<FaSnowflake color={purple} size={50} className="icon" />}
              label="Frozen Foods"
            />
            <SmallNavCard
              link="/account"
              icon={
                <FaDrumstickBite color={coral} size={50} className="icon" />
              }
              label="Meat"
            />
            <SmallNavCard
              link="/account"
              icon={<FaTooth color={green} size={50} className="icon" />}
              label="Personal Care"
            />
            <SmallNavCard
              link="/account"
              icon={<FaCarrot color={yellow} size={50} className="icon" />}
              label="Produce"
            />
            <SmallNavCard
              link="/account"
              icon={
                <FaPastafarianism color={purple} size={50} className="icon" />
              }
              label="Others"
            />
          </div>
        </div>
        <Link to="/home">
          <div className="btn">Checkout</div>
        </Link>
      </React.Fragment>
    )
  }
}

export default FindItemPage
