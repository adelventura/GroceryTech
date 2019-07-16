import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';

export default class FetchStores extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/store`)
      .then(response => response.json())
      .then(data => this.setState({ stores: data }));
  }

  render() {
    const { stores } = this.state;

    if (stores) {
      return this.props.content(stores);
    } else {
      return <Loading />;
    }
  }
}
