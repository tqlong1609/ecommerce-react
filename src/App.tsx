import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Link, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RedirectSignInRoute } from "./components/RedirectSignInRoute";
import { AllProducts } from "./screens/AllProducts";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import { OrderHistoryScreen } from "./screens/OrderHistoryScreen";
import { OrderScreen } from "./screens/OrderScreen";
import { PaymentScreen } from "./screens/PaymentScreen";
import { PlaceOrderScreen } from "./screens/PlaceOrderScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ProductScreen from "./screens/ProductScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ShippingAddressScreen } from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";
import { SignupScreen } from "./screens/SignupScreen";
import { signOut } from "./state/actions/users";
import { State } from './state/reducers'
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";

function App(): React.ReactElement {
  const productsCart = useSelector((state: State) => state.cartProducts.productsCart)
  const { user } = useSelector((state: State) => state.userLogin)
  const dispatch = useDispatch()
  const onSignOut = () => {
    if (user) {
      dispatch(signOut())
    }
  }
  return (
    <BrowserRouter>
      <>
        <Header />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductDetailScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/shipping" component={ShippingAddressScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/orderhistory" component={OrderHistoryScreen} />
        <Route path="/allproduct" component={AllProducts} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/contact" component={ContactScreen} />
        <RedirectSignInRoute path="/userprofile" component={ProfileScreen} />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
