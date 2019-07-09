import React from 'react'
import { Link } from 'react-router-dom'
import FetchPaymentMethods from '../../Components/FetchPaymentMethods'
import Loading from '../../Components/Loading'

export default class PaymentMethodsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: '',
      selectedPayment: ''
    }
  }

  selectHandler = paymentName => {
    return event => {
      this.setState({
        selected: event.target.value,
        selectedPayment: paymentName
      })
    }
  }

  handleNewPayment = event => {
    this.props.history.push(`/payment_methods/new`)
  }

  handleChoose = event => {
    if (this.state.selected == '') {
      alert('Must select a payment method')
    } else {
      const { selectedPayment } = this.state
      alert('Selected Payment: ' + this.state.selectedPayment)
      //this.props.history.push(`/home`)
    }
  }

  render() {
    const selectedPayment = this.state.selectedPayment
    return (
      <React.Fragment>
        <FetchPaymentMethods
          placeholder={() => {
            return <Loading />
          }}
          content={paymentMethods => {
            return (
              <div>
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
                    {paymentMethods.map(paymentMethod => {
                      return (
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
                                  name="payment method"
                                  value="payment name"
                                  value={paymentMethod.paymentName}
                                  checked={
                                    selectedPayment == paymentMethod.paymentName
                                  }
                                  onChange={this.selectHandler(
                                    paymentMethod.paymentName
                                  )}
                                  onClick={this.selectHandler(
                                    paymentMethod.paymentName
                                  )}
                                  style={{ marginRight: '10px' }}
                                />
                              </form>

                              {paymentMethod.paymentName}
                            </td>
                            <td>{paymentMethod.accountNumber}</td>
                            <td>{paymentMethod.routingNumber}</td>
                            <td>{paymentMethod.default ? 'Yes' : 'No'}</td>
                          </tr>
                        </tbody>
                      )
                    })}
                  </table>

                  <div style={{ width: '100%', marginTop: '20px' }}>
                    <button
                      className="btn"
                      style={{
                        float: 'left'
                      }}
                      onClick={this.handleNewPayment}
                    >
                      Use Different Payment
                    </button>
                    <button
                      className="btn"
                      onClick={this.handleChoose}
                      style={{
                        float: 'right'
                      }}
                    >
                      Confirm Order
                    </button>
                  </div>
                </div>
              </div>
            )
          }}
        />
      </React.Fragment>
    )
  }
}
