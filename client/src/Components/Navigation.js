import React from 'react';
import backArrows from '../Images/chevrons-left.svg';
import { withRouter } from 'react-router-dom';
import { AccountContext } from '../App';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  signOut = update => {
    return () => {
      update(null);
    };
  };

  render() {
    return (
      <AccountContext.Consumer>
        {context => {
          return (
            <>
              <div className="nav-bar">
                <button className="nav-link btn-clear" onClick={this.goBack}>
                  <img src={backArrows} alt="<<" />
                </button>
                <button
                  className="nav-link btn-clear"
                  onClick={this.signOut(context.update)}
                >
                  Sign Out
                </button>
                <span style={{ fontSize: '26px' }}>GroceryTech</span>
              </div>
            </>
          );
        }}
      </AccountContext.Consumer>
    );
  }
}

export default withRouter(Navigation);
