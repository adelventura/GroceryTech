import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';
import { userManager } from '../App';

export default class FetchReceipt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      receipt: undefined
    };
  }

  componentDidMount() {
    const { id } = this.props;

    fetch(`${Config.baseUrl}/checkout/receipt/${id}`, {
      headers: { Authorization: userManager.user.token }
    })
      .then(response => response.json())
      .then(data => this.setState({ paymentMethods: data }));
  }

  render() {
    const { receipt } = this.state;

    if (receipt) {
      return this.props.content(receipt);
    } else {
      return <Loading />;
    }
  }
}
