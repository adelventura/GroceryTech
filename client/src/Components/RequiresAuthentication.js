import React from 'react';
import { withRouter } from 'react-router-dom';
import { userManager } from '../App';

class RequiresAuthentication extends React.Component {
  goToSignIn() {
    this.props.history.replace(`/`);
  }

  render() {
    if (userManager.user != null) {
      return this.props.children;
    } else {
      this.goToSignIn();
      return <></>;
    }
  }
}

export default withRouter(RequiresAuthentication);
