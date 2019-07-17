import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';

export default class FetchAssignments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assignments: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/assignments`, {
      headers: { Authorization: this.props.token }
    })
      .then(response => response.json())
      .then(data => this.setState({ assignments: data }));
  }

  render() {
    const { assignments } = this.state;

    if (assignments) {
      return this.props.content(assignments);
    } else {
      return <Loading />;
    }
  }
}
