import React from 'react';
import { AccountContext } from '../App';
import { withRouter } from 'react-router-dom';

class RequiresAuthentication extends React.Component {
  goToSignIn() {
    this.props.history.replace(`/`);
  }

  render() {
    return (
      <AccountContext.Consumer>
        {context => {
          if (context.token != null) {
            return this.props.children;
          } else {
            this.goToSignIn();
          }
        }}
      </AccountContext.Consumer>
    );
  }
}

export default withRouter(RequiresAuthentication);
