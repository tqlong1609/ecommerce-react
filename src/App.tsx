import React from "react";
import { useSelector } from "react-redux";

import { BrowserRouter, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { State } from './state/reducers'
function App(): React.ReactElement {
  const productsCart = useSelector((state: State) => state.cartProducts.productsCart)
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
            <Link to="cart.html">
              Cart
              {productsCart.length > 0 && <span className="badge">{productsCart.length}</span>}
            </Link>
            <Link to="signin.html">Sign in</Link>
          </div>
        </header>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />

        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
