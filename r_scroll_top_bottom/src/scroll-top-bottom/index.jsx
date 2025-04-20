import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const ScrollTopBottom = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const bottomRef = useRef();
  const fetchDataAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const result = await response.json();
      setProducts(result.products);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataAPI();
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return <h1>Loading wait ........</h1>;
  }
  if (error) {
    return <h1>`Error: ${error}`</h1>;
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Scroll To Top and Bottom Feature</h1>
      <h1>This the Top Section</h1>
      <button onClick={handleScrollDown}>Scroll To Bottom</button>

      {products && products.length > 0
        ? products.map((item) => (
            <p>
              {item.id} .{item.title}
            </p>
          ))
        : null}

      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}>
        <h1>This the bottom section</h1>
      </div>
    </div>
  );
};

export default ScrollTopBottom;
