import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import { PaymentScreen } from "./screens/PaymentScreen";
import { PlaceOrderScreen } from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import { ShippingAddressScreen } from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";
import { SignupScreen } from "./screens/SignupScreen";
import { signOut } from "./state/actions/users";
import { State } from './state/reducers'

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
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              amazona
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {productsCart.length > 0 && <span className="badge">{productsCart.length}</span>}
            </Link>
            {!user ? <Link to="/signin">Sign in</Link> : <div className="dropdown">
              <Link to="#"> {user.name} <i className="fa fa-caret-down"></i> </Link>
              <ul className="dropdown-content">
                <Link to="#signout" onClick={onSignOut}>Sign Out</Link>
              </ul>
            </div>}
          </div>
        </header>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/shipping" component={ShippingAddressScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
