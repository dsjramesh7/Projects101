import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cart-slice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleRemoveCart = () => {
    console.log("remove");
    dispatch(removeFromCart(item?.id));
  };

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
        <h1 className="w-40 text-xl font-semibold text-gray-800 truncate">
          {item?.title}
        </h1>
        <p className="text-lg text-gray-600">${item?.price}</p>
        <button
          onClick={
            cartItem.some((something) => something.id === item.id)
              ? handleRemoveCart
              : handleAddToCart
          }
          className="cursor-pointer w-full bg-red-400 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition-colors duration-200"
        >
          {cartItem.some((something) => something.id === item.id)
            ? "Remove from Cart"
            : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
