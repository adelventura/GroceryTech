import React from 'react';
import Config from '../Config/Config';

export default class FetchItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: undefined
    };
  }

  componentDidMount() {
    const { id, category } = this.props;

    fetch(`${Config.baseUrl}/store/${id}/search/${category}`)
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  render() {
    const { items } = this.state;

    if (items) {
      return this.props.content(items);
    } else {
      return this.props.placeholder();
    }
  }
}
