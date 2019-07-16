import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';

export default class FetchStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/store/${this.props.id}`)
      .then(response => response.json())
      .then(data => this.setState({ store: data }));
  }

  render() {
    const { store } = this.state;

    if (store) {
      return this.props.content(store);
    } else {
      return <Loading />;
    }
  }
}
