import React from 'react';

export default class RevenueReportPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storeName: '',
      itemsSold: '',
      revenue: ''
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-header">Revenue Report</div>
        <div
          className="card block-centered"
          style={{
            width: '30%'
          }}
        >
          <div className="flex-col">
            <div
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%'
              }}
            >
              <h3 className="form-input-label">Store Name</h3>
              <input
                className="form-input"
                name="storeName"
                type="text"
                placeholder="Store name"
                // value={this.state.firstName}
                // onChange={this.handleChange}
              />
            </div>
            <br />
            <div
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%'
              }}
            >
              <h3 className="form-input-label">Number of Items Sold</h3>
              <input
                className="form-input"
                name="itemsSold"
                type="text"
                placeholder="Number of items sold"
                //value={this.state.firstName}
                //onChange={this.handleChange}
              />
            </div>
            <br />

            <div
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '15px',
                width: '100%'
              }}
            >
              <h3 className="form-input-label">Total Profit</h3>
              <input
                className="form-input"
                name="profit"
                type="text"
                placeholder="Total profit"
                // value={this.state.firstName}
                // onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
