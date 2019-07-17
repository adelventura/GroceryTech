import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';

export default class FetchAssignment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assignment: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/assignments/${this.props.id}`)
      .then(response => response.json())
      .then(data => this.setState({ assignment: data }));
  }

  render() {
    const { assignmentDetail } = this.state;

    if (assignmentDetail) {
      return this.props.content(assignmentDetail);
    } else {
      return <Loading />;
    }
  }
}
