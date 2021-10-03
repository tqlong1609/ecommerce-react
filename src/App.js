import React from "react";
import data from "./data";

const MAX_RATING = 5;

function displayStar(rating) {
  if (Number.isInteger(rating) && rating <= MAX_RATING && rating >= 0) {
    let arrStarSpan = ;
    for (let i = 0; i < 5; i++) {
      arrStarSpan += (
        <span>
          <i className="fa fa-star"></i>
        </span>
      );
    }
    console.log(arrStarSpan);
    return arrStarSpan;
  }
  return null;
}

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
          <div key={product._id} className="card">
            <a href="#">
              <img className="medium" src={product.image} alt={product.name} />
            </a>
            <div className="card-body">
              <a href="#">
                <h2>{product.name}</h2>
              </a>
              <div className="rating">
                {displayStar(product.rating)}
                {/* <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span> */}
              </div>
              <div className="price">${product.price}</div>
            </div>
          </div>
        ))}
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
