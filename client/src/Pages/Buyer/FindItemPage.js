import React from 'react'
import SmallNavCard from '../../Components/SmallNavCard.js'
import {
  FaCheese,
  FaCarrot,
  FaGlassWhiskey,
  FaBirthdayCake,
  FaTimesCircle,
  FaHotdog,
  FaDrumstickBite,
  FaTooth,
  FaPastafarianism,
  FaBroom,
  FaSnowflake,
  FaShoppingBasket
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
              icon={
                <FaGlassWhiskey color="#f38181" size={50} className="icon" />
              }
              label="Beverages"
            />
            <SmallNavCard
              link="/account"
              icon={
                <FaBirthdayCake color="#a9eec2" size={50} className="icon" />
              }
              label="Baking Goods"
            />
            <SmallNavCard
              link="/account"
              icon={
                <FaShoppingBasket color="#fad284" size={50} className="icon" />
              }
              label="Canned Goods"
            />
            <SmallNavCard
              link="/account"
              icon={<FaBroom color="#705772" size={50} className="icon" />}
              label="Cleaning Products"
            />
            <SmallNavCard
              link="/account"
              icon={<FaCheese color="#f38181" size={50} className="icon" />}
              label="Dairy"
            />
          </div>

          <div className="grid-column-right">
            <SmallNavCard
              link="/account"
              icon={<FaSnowflake color="#705772" size={50} className="icon" />}
              label="Frozen Foods"
            />
            <SmallNavCard
              link="/account"
              icon={
                <FaDrumstickBite color="#f38181" size={50} className="icon" />
              }
              label="Meat"
            />
            <SmallNavCard
              link="/account"
              icon={<FaTooth color="#a9eec2" size={50} className="icon" />}
              label="Personal Care"
            />
            <SmallNavCard
              link="/account"
              icon={<FaCarrot color="#fad284" size={50} className="icon" />}
              label="Produce"
            />
            <SmallNavCard
              link="/account"
              icon={
                <FaPastafarianism color="#705772" size={50} className="icon" />
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
