import React from 'react'
import backArrows from '../Images/chevrons-left.svg'
import Router from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {
    let navItems = ['<<', 'GroceryTech']
    return (
      <React.Fragment>
        <div className="nav-bar">
          <button className="nav-link btn-clear" onClick={this.goBack}>
            <img src={backArrows} alt="<<" />
          </button>
          <span style={{ fontSize: '26px' }}>GroceryTech</span>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Navigation)
