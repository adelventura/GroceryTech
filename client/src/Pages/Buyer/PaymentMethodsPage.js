import React from 'react'
import { Link } from 'react-router-dom'

class PaymentMethodsPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="page-header"> Payment Methods </h3>
        <div className="tbl-card">
          <table className="tbl">
            <thead>
              <tr className="table-header">
                <th scope="col">Pament Name</th>
                <th scope="col">Account Number</th>
                <th scope="col">Routing Number</th>
                <th scope="col">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <form
                    style={{
                      display: 'inline'
                    }}
                  >
                    <input
                      type="radio"
                      name="store"
                      value="payment name"
                      style={{ marginRight: '10px' }}
                    />
                  </form>
                  Visa
                </td>
                <td>123456789</td>
                <td>987654321</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>

          <div style={{ width: '100%', marginTop: '20px' }}>
            <button
              className="btn"
              style={{
                float: 'left'
              }}
            >
              Use Different Payment
            </button>
            <button
              className="btn"
              style={{
                float: 'right'
              }}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default PaymentMethodsPage
