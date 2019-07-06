import React, { Component } from 'react'
import './App.css'
import Register from './Pages/Buyer/Register'
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
            <Route path="/register_buyer" component={Register} />
            <Route path="/register" component={RegistrationNavPage} />
            <Route path="/home" component={Home} />
            <Route path="/store/:id" component={StoreHomepage} />
            <Route path="/account" component={AccountInfo} />
            <Route path="/order" component={Order} />
            <Route path="/inventory/:id" component={ItemListingPage} />
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
