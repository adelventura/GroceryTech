import React from 'react';
import Config from '../Config/Config';
import Loading from '../Components/Loading';
import { userManager } from '../App';

export default class FetchRevenueReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      report: undefined
    };
  }

  componentDidMount() {
    fetch(`${Config.baseUrl}/manager/store/revenue`, {
      headers: { Authorization: userManager.user.token }
    })
      .then(response => response.json())
      .then(data => this.setState({ report: data }));
  }

  render() {
    const { report } = this.state;

    if (report) {
      return this.props.content(report);
    } else {
      return <Loading />;
    }
  }
}
