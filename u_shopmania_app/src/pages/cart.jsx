import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "../components/cartCard";

const CartPage = () => {
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const fetchCartData = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCartPrice(fetchCartData.reduce((acc, curr) => acc + curr.price, 0));
  }, [fetchCartData]);

  console.log(fetchCartData, totalCartPrice);
  return (
    <div className="flex justify-center">
      {fetchCartData && fetchCartData.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {fetchCartData.map((cartItem) => (
                <CartCard cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-red-800">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">Total Item</span>
                <span>: {fetchCartData.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount</span>
                <span>: {totalCartPrice}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="cursor-pointer bg-red-400 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
