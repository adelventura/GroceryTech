import React from 'react';
import Config from '../Config/Config';

export default class FetchOrders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/account/order_history`)
      .then(response => response.json())
      .then(data => this.setState({ history: data }));
  }

  render() {
    const { history } = this.state;

    if (history) {
      return this.props.content(history);
    } else {
      return this.props.placeholder();
    }
  }
}
