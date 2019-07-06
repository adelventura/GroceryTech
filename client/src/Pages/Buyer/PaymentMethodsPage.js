import React from 'react'
import { Link } from 'react-router-dom'

class PaymentMethodsPage extends React.Component {
  render() {
    return (
      <Link to="/payment_methods">
        <div className="btn">Button Test</div>
      </Link>
    )
  }
}

export default PaymentMethodsPage
