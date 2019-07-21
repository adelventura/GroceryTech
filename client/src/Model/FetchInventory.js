import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';

export default class FetchInventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/store/${this.props.id}/inventory`)
      .then(response => response.json())
      .then(data => this.setState({ inventory: data }));
  }

  render() {
    const { inventory } = this.state;

    if (inventory) {
      return this.props.content(inventory);
    } else {
      return <Loading />;
    }
  }
}
