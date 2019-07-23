import React, { Component } from "react";
import "./App.css";
import RegisterBuyerPage from "./Pages/Buyer/RegisterBuyerPage";
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
import RegisterManagerPage from "./Pages/Manager/RegisterManagerPage";
import ManagerAccountInfoPage from "./Pages/Manager/ManagerAccountInfoPage";
import ManagerHomePage from "./Pages/Manager/ManagerHomePage";
import OutstandingOrdersPage from "./Pages/Manager/OutstandingOrdersPage";
import RevenueReportPage from "./Pages/Manager/RevenueReportPage";
import StoreInventoryPage from "./Pages/Manager/StoreInventoryPage";
import DelivererHomePage from "./Pages/Deliverer/DelivererHomePage";
import RegisterDelivererPage from "./Pages/Deliverer/RegisterDelivererPage";
import AssignmentsListPage from "./Pages/Deliverer/AssignmentsListPage";
import DelivererAccountInfoPage from "./Pages/Deliverer/DelivererAccountInfoPage";
import ViewAssignmentPage from "./Pages/Deliverer/ViewAssignmentPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";

interface CartItem {
  item: {
    id: string;
    name: string;
    description: string;
    retailPrice: number;
    inStock: boolean;
  };
  quantity: number;
}

class UserManager {
  user: {
    token: string;
    type: string;
    cart: { [index: number]: CartItem };
  } | null = null;

  constructor() {
    const token = Cookies.get("token");
    const type = Cookies.get("type");

    console.log("got: " + token + " " + type);

    if (token && type) {
      this.user = {
        token,
        type,
        cart: {}
      };
    } else {
      this.user = null;
    }
  }

  update = (user: { token: string; type: string } | null) => {
    if (user != null) {
      Cookies.set("token", user.token);
      Cookies.set("type", user.type);

      this.user = {
        ...user,
        cart: {}
      };
    } else {
      Cookies.remove("token");
      Cookies.remove("type");

      this.user = null;
    }
  };

  clearCart = () => {
    if (this.user != null) {
      this.user = {
        ...this.user,
        cart: {}
      };
    }
  };
}

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
            <Route path="/home" component={BuyerHomePage} />
            <Route exact path="/register" component={RegistrationNavPage} />
            <Route
              exact
              path="/deliverer/register"
              component={RegisterDelivererPage}
            />
            <Route exact path="/deliverer/home" component={DelivererHomePage} />
            <Route
              exact
              path="/deliverer/account"
              component={DelivererAccountInfoPage}
            />
            <Route exact path="/assignments" component={AssignmentsListPage} />
            <Route
              exact
              path="/assignments/:id"
              component={ViewAssignmentPage}
            />
            <Route exact path="/manager/home" component={ManagerHomePage} />
            <Route
              exact
              path="/manager/register"
              component={RegisterManagerPage}
            />
            <Route
              exact
              path="/manager/account"
              component={ManagerAccountInfoPage}
            />
            <Route
              exact
              path="/manager/orders"
              component={OutstandingOrdersPage}
            />
            <Route
              exact
              path="/manager/store/revenue"
              component={RevenueReportPage}
            />
            <Route
              exact
              path="/store/inventory"
              component={StoreInventoryPage}
            />
            <Route exact path="/buyer/register" component={RegisterBuyerPage} />
            <Route exact path="/account" component={AccountInfoPage} />
            <Route
              exact
              path="/account/order_history"
              component={OrderHistoryPage}
            />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/checkout/receipt" component={ReceiptPage} />
            <Route
              exact
              path="/account/payment_methods"
              component={PaymentMethodsPage}
            />
            <Route
              exact
              path="/account/payment_methods/new"
              component={NewPaymentMethodPage}
            />
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
export const userManager = new UserManager();
