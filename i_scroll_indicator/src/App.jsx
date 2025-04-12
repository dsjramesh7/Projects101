import React from "react";
import ScrollIndicator from "./components/scroll-indicator";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
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

  const handleScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div>
      <ScrollIndicator
        productData={productData}
        errorMsg={errorMsg}
        loading={loading}
        scrollPercentage={scrollPercentage}
      />
    </div>
  );
};

export default App;
