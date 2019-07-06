import React, { Component } from 'react'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Buyer/Register'
import Home from './Pages/Buyer/Home'
import StoreHomepage from './Pages/Buyer/StoreHomepage'
import Landing from './Pages/Landing'
import OrderHistory from './Pages/Buyer/OrderHistory'
import Order from './Pages/Buyer/Order'
import PaymentMethods from './Pages/Buyer/PaymentMethods'
import FindItemPage from './Pages/Buyer/FindItemPage'
import RegistrationNavPage from './Pages/Buyer/RegistrationNavPage'
import AccountInfo from './Pages/Buyer/AccountInfo'
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
            <Route path="/register_buyer" component={Register} />
            <Route path="/register" component={RegistrationNavPage} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/store_home" component={StoreHomepage} />
            <Route path="/account" component={AccountInfo} />
            <Route path="/order" component={Order} />
            <Route path="/store/:id" component={StorePage} />
            <Route path="/store/:id/search" component={AccountInfo} />
            <Route path="/find_item" component={FindItemPage} />
            <Route path="/order_history" component={OrderHistory} />
            <Route path="/payment_methods" component={PaymentMethods} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
