import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [count, setCount] = useState(0);
  const [disabledBtn, setDisableBtn] = useState(false);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      setProducts((prevData) => [...prevData, ...data.products]);
      setLoading(false);
    } catch (error) {
      setErrorMsg(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableBtn(true);
    }
  }, [products]);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-semibold text-blue-600 animate-pulse">
          Loading products data...
        </h1>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-semibold text-red-600">
          Error: {errorMsg.message}
        </h1>
      </div>
    );
  }
  console.log("products", products);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.length > 0
          ? products.map((singleProductitem) => (
              <div
                key={singleProductitem.title}
                className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-center gap-4"
              >
                <img
                  src={singleProductitem.thumbnail}
                  alt={singleProductitem.title}
                  className="h-48 w-48 object-cover rounded-lg"
                />
                <p className="text-center text-lg font-medium">
                  <span className="text-red-500 font-bold mr-2">
                    {singleProductitem.id}
                  </span>
                  {singleProductitem.title}
                </p>
              </div>
            ))
          : null}
      </div>

      <div className="flex flex-col gap-5 items-center mt-10 ">
        <button
          disabled={disabledBtn}
          onClick={() => setCount(count + 1)}
          className="disabled:bg-gray-500 cursor-pointer px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Load More Products
        </button>
        {disabledBtn ? "Bas Karde bhai/didi.." : null}
      </div>
    </div>
  );
};

export default InfiniteScroll;
