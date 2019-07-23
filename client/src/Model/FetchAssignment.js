import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';
import { userManager } from '../App';

export default class FetchAssignment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assignment: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/assignments/${this.props.id}`, {
      headers: { Authorization: userManager.user.token }
    })
      .then(response => response.json())
      .then(data => this.setState({ assignment: data }));
  }

  render() {
    const { assignment } = this.state;

    if (assignment) {
      return this.props.content(assignment);
    } else {
      return <Loading />;
    }
  }
}
