import React from 'react'

const PAYMENT_METHODS = [
  {
    paymentName: 'Visa',
    accountNumber: 453433338,
    routingNumber: 475782796,
    default: true
  },
  {
    paymentName: 'Amex',
    accountNumber: 548461883,
    routingNumber: 936566668,
    default: false
  },
  {
    paymentName: 'Check',
    accountNumber: 852932841,
    routingNumber: 547162669,
    default: false
  }
]

export default class FetchPaymentMethods extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      paymentsMethods: undefined
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const paymentMethods = PAYMENT_METHODS
      this.setState({ paymentMethods })
    }, 100)
  }

  render() {
    const { paymentMethods } = this.state

    if (paymentMethods) {
      return this.props.content(paymentMethods)
    } else {
      return this.props.placeholder()
    }
  }
}
