import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';
import { userManager } from '../App';

export default class FetchOutstandingOrders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      outstandingOrders: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/manager/orders`, {
      headers: { Authorization: userManager.user.token }
    })
      .then(response => response.json())
      .then(data => this.setState({ outstandingOrders: data }));
  }

  render() {
    const { outstandingOrders } = this.state;

    if (outstandingOrders) {
      return this.props.content(outstandingOrders);
    } else {
      return <Loading />;
    }
  }
}
