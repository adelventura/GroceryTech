import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';

export default class FetchPaymentMethods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentMethods: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/account/payment_methods`, {
      headers: { Authorization: this.props.token }
    })
      .then(response => response.json())
      .then(data => this.setState({ paymentMethods: data }));
  }

  render() {
    const { paymentMethods } = this.state;

    if (paymentMethods) {
      return this.props.content(paymentMethods);
    } else {
      return <Loading />;
    }
  }
}
