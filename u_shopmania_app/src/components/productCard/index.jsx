import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="p-8 border border-red-500 max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-60 overflow-hidden">
        <img
          src={item?.image}
          alt={item?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <h1 className="text-xl font-semibold text-gray-800 truncate">
          {item?.title}
        </h1>
        <p className="text-lg text-gray-600">${item?.price}</p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors duration-200">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
