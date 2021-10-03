import React from "react";
import Products from "../components/Products";
import data from "../data";

export default function HomeScreen() {
  return (
    <main className="row center">
      {data.products.map((product) => (
        <Products key={product._id} product={product} />
      ))}
    </main>
  );
}
