import React from "react";
import Products from "./components/Products";
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            amazona
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign in</a>
        </div>
      </header>
      <main className="row center">
        {data.products.map((product) => (
          <Products product={product} />
        ))}
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
