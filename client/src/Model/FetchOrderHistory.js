import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';

export default class FetchOrderHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/account/order_history`, {
      headers: { Authorization: this.props.token }
    })
      .then(response => response.json())
      .then(data => this.setState({ history: data }));
  }

  render() {
    const { history } = this.state;

    if (history) {
      return this.props.content(history);
    } else {
      return <Loading />;
    }
  }
}
