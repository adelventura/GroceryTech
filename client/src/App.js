import React, { Component } from 'react'
import './App.css'
import RegisterBuyerPage from './Pages/Buyer/RegisterBuyerPage'
import RegisterDelivererPage from './Pages/Deliverer/RegisterDelivererPage'
import RegisterManagerPage from './Pages/Manager/RegisterManagerPage'
import Home from './Pages/Buyer/Home'
import StoreHomepage from './Pages/Buyer/StoreHomepage'
import ItemListingPage from './Pages/Buyer/ItemListingPage'
import Landing from './Pages/Landing'
import OrderHistory from './Pages/Buyer/OrderHistoryPage'
import Order from './Pages/Buyer/Order'
import PaymentMethods from './Pages/Buyer/PaymentMethodsPage'
import FindItemPage from './Pages/Buyer/FindItemPage'
import RegistrationNavPage from './Pages/Buyer/RegistrationNavPage'
import AccountInfo from './Pages/Buyer/AccountInfoPage'
import Navigation from './Components/Navigation'
import ErrorPage from './Pages/ErrorPage.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
            <Route path="/register_buyer" component={RegisterBuyerPage} />
            <Route
              path="/register_deliverer"
              component={RegisterDelivererPage}
            />
            <Route path="/register_manager" component={RegisterManagerPage} />
            <Route path="/register" component={RegistrationNavPage} />
            <Route path="/home" component={Home} />
            <Route path="/account" component={AccountInfo} />
            <Route path="/order_history" component={OrderHistory} />
            <Route path="/payment_methods" component={PaymentMethods} />

            {/* Store */}
            <Route exact path="/store" component={Order} />
            <Route exact path="/store/:id/search" component={FindItemPage} />
            <Route exact path="/store/:id" component={StoreHomepage} />
            <Route
              exact
              path="/store/:id/search/:category"
              component={ItemListingPage}
            />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
