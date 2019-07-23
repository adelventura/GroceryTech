import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';
import { userManager } from '../App';

export default class FetchManagerAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accountInformation: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/manager/account`, {
      headers: { Authorization: userManager.user.token }
    })
      .then(response => response.json())
      .then(data => this.setState({ accountInformation: data }));
  }

  render() {
    const { accountInformation } = this.state;

    if (accountInformation) {
      return this.props.content(accountInformation);
    } else {
      return <Loading />;
    }
  }
}
