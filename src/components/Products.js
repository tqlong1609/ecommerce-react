import React from "react";
import Rating from "./Rating";

export default function Products(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <a href="#">
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a href="#">
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviewer={product.numReviewer} />
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}
