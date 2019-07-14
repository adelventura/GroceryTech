import React, { Component } from "react";
import "./App.css";
import RegisterBuyerPage from "./Pages/Buyer/RegisterBuyerPage";
import RegisterDelivererPage from "./Pages/Deliverer/RegisterDelivererPage";
import RegisterManagerPage from "./Pages/Manager/RegisterManagerPage";
import BuyerHomePage from "./Pages/Buyer/BuyerHomePage";
import StoreHomePage from "./Pages/Buyer/Ordering/StoreHomePage";
import ItemListingPage from "./Pages/Buyer/Ordering/ItemListingPage";
import LandingPage from "./Pages/LandingPage";
import OrderHistoryPage from "./Pages/Buyer/Ordering/OrderHistoryPage";
import StartNewOrderPage from "./Pages/Buyer/Ordering/StartNewOrderPage";
import PaymentMethodsPage from "./Pages/Buyer/PaymentMethodsPage";
import NewPaymentMethodPage from "./Pages/Buyer/NewPaymentMethodPage";
import ItemCategoriesPage from "./Pages/Buyer/Ordering/ItemCategoriesPage";
import RegistrationNavPage from "./Pages/Buyer/RegistrationNavPage";
import AccountInfoPage from "./Pages/Buyer/AccountInfoPage";
import ViewCartPage from "./Pages/Buyer/Ordering/ViewCartPage";
import CheckoutPage from "./Pages/Buyer/Ordering/CheckoutPage";
import Navigation from "./Components/Navigation";
import ErrorPage from "./Pages/ErrorPage.js";
import ReceiptPage from "./Pages/Buyer/Ordering/ReceiptPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div
          className="App"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <Navigation />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/register_buyer" component={RegisterBuyerPage} />
            <Route
              path="/register_deliverer"
              component={RegisterDelivererPage}
            />
            <Route path="/register_manager" component={RegisterManagerPage} />
            <Route path="/register" component={RegistrationNavPage} />
            <Route path="/home" component={BuyerHomePage} />
            <Route path="/account" component={AccountInfoPage} />
            <Route path="/order_history" component={OrderHistoryPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/checkout/receipt" component={ReceiptPage} />

            <Route
              exact
              path="/payment_methods"
              component={PaymentMethodsPage}
            />
            <Route
              exact
              path="/payment_methods/new"
              component={NewPaymentMethodPage}
            />

            {/* Store */}
            <Route exact path="/store" component={StartNewOrderPage} />
            <Route
              exact
              path="/store/:id/search"
              component={ItemCategoriesPage}
            />
            <Route exact path="/store/:id" component={StoreHomePage} />
            <Route
              exact
              path="/store/:id/search/:category"
              component={ItemListingPage}
            />
            <Route exact path="/store/:id/cart" component={ViewCartPage} />

            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
