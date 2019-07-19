import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';

export default class FetchOutstandingOrders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      outstandingOrders: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/store/:id/orders/outstanding`, {
      headers: { Authorization: this.props.token }
    })
      .then(response => response.json())
      .then(data => this.setState({ outstandingOrders: data }));
  }

  render() {
    const { orders } = this.state;

    if (orders) {
      return this.props.content(orders);
    } else {
      return <Loading />;
    }
  }
}
