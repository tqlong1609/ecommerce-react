import axios from "axios";
import React, { useEffect, useState } from "react";
import AlertBox from "../components/AlertBox";
import LoadingBox from "../components/LoadingBox";
import Products, { IProduct } from "../components/Products";

interface IError {
  message: string
}

export default function HomeScreen() {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const getProductAPI = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (error) {
        const result = (error as IError).message;
        setError(result);
      } finally {
        setIsLoading(false);
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
        <AlertBox variant="info">{error}</AlertBox>
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
