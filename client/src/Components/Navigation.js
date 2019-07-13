import React from 'react'
import backArrows from '../Images/chevrons-left.svg'
import { withRouter } from 'react-router-dom'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {
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
