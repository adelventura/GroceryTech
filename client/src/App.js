import React, { Component } from 'react'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import OrderHistory from './Pages/OrderHistory'
import Order from './Pages/Order'
import PaymentMethods from './Pages/PaymentMethods'
import AccountInfo from './Pages/AccountInfo'
import Navigation from './Components/Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StorePage from './Pages/StorePage'

class App extends Component {
  render() {
    return (
      <Router>
        <div
          className="App"
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <Navigation />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/account" component={AccountInfo} />
            <Route path="/order" component={Order} />
            <Route path="/store/:id" component={StorePage} />
            <Route path="/store/:id/search" component={AccountInfo} />
            <Route path="/order_history" component={OrderHistory} />
            <Route path="/payment_methods" component={PaymentMethods} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
