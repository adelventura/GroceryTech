import React from 'react';
import Config from '../Config/Config';

export default class FetchPaymentMethods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentMethods: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/account/payment_methods`)
      .then(response => response.json())
      .then(data => this.setState({ paymentMethods: data }));
  }

  render() {
    const { paymentMethods } = this.state;

    if (paymentMethods) {
      return this.props.content(paymentMethods);
    } else {
      return this.props.placeholder();
    }
  }
}
