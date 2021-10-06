import axios from "axios";
import React, { useEffect, useState } from "react";
import AlertBox from "../components/AlertBox";
import LoadingBox from "../components/LoadingBox";
import Products from "../components/Products";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getProductAPI = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
        setIsLoading(false);

      } catch (error) {
        console.log('error',error);
        setIsLoading(false);

        setError(error.message);

      }
    };
    getProductAPI();
  }, []);
  if (!products) {
    return <div>Waiting data...</div>;
  }
  return (
    <div>
      {isLoading ? (
        <LoadingBox />
      ) : error ? (
        <AlertBox variant="danger">{error}</AlertBox>
      ) : (
        <main className="row center">
          {products.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </main>
      )}
    </div>
  );
}
