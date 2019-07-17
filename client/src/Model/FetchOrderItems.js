import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';

export default class FetchOrderItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: undefined
    };
  }

  componentDidMount() {
    const { id } = this.props;

    fetch(`${Config.baseUrl}/assignment/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  render() {
    const { items } = this.state;

    if (items) {
      return this.props.content(items);
    } else {
      return <Loading />;
    }
  }
}
