import React from "react";
import ScrollIndicator from "./components/scroll-indicator";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState("");
  const fetchProductsData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const result = await response.json();
      // console.log(result.products);
      setProductData(result.products);
      setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);
  return (
    <div>
      <ScrollIndicator
        productData={productData}
        errorMsg={errorMsg}
        loading={loading}
      />
    </div>
  );
};

export default App;
