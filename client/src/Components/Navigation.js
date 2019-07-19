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
                  <span style={{ fontSize: '16px' }}> Back </span>
                </button>

                <span
                  style={{
                    fontSize: '30px',
                    color: '#767676'
                  }}
                >
                  GroceryTech
                </span>
                <button
                  className="nav-link btn-clear"
                  style={{
                    fontSize: '16px'
                  }}
                  onClick={this.signOut(context.update)}
                >
                  Sign Out
                </button>
              </div>
            </>
          );
        }}
      </AccountContext.Consumer>
    );
  }
}

export default withRouter(Navigation);
