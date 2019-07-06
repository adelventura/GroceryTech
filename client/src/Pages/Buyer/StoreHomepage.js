import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaCarrot, FaTimesCircle } from 'react-icons/fa'
import NavCard from '../../Components/NavCard.js'
import SmallNavCard from '../../Components/SmallNavCard.js'
import FetchStore from '../../Components/FetchStore'

class StoreHomepage extends React.Component {
  render() {
    const { id } = this.props.match.params

    return (
      <div>
        <FetchStore
          id={id}
          placeholder={() => {
            return <div>LOADING STORE</div>
          }}
          content={store => {
            return (
              <div>
                <p className="pageHeader">
                  Welcome to {store.name} <br />
                </p>

                <div className="grid-container-row">
                  <NavCard
                    link="/order"
                    icon={
                      <FaCarrot color="#a9eec2" size={140} className="icon" />
                    }
                    label="Find Item"
                  />
                  <NavCard
                    link="/order_history"
                    icon={
                      <FaShoppingCart
                        color="#705772 "
                        size={140}
                        className="icon"
                      />
                    }
                    label="View Cart"
                  />
                </div>

                <div className="grid-container-row">
                  <NavCard
                    link="/account"
                    icon={
                      <FaTimesCircle
                        color="#f38181"
                        size={140}
                        className="icon"
                      />
                    }
                    label="Cancel order"
                  />
                </div>
              </div>
            )
          }}
        />
      </div>
    )
  }
}

export default StoreHomepage
