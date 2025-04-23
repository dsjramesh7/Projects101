import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { PacmanLoader } from "react-spinners";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductsDataFromAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      // console.log(result);
      setProducts(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsDataFromAPI();
  }, []);

  if (error) {
    return <div>Error: ${error}</div>;
  }
  return (
    <div className="container mx-auto mt-4">
      {loading ? (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
          <PacmanLoader />
        </div>
      ) : products && products.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <h1>No Products Data present</h1>
      )}
    </div>
  );
};

export default HomePage;
