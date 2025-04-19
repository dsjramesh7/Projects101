import React from "react";

const Square = ({ value, onHandleSquareClick }) => {
  // console.log(onHandleSquareClick);
  return (
    <button
      onClick={onHandleSquareClick}
      className="border border-red-500 h-28 w-28 bg-red-200 text-3xl text-blue-700 font-bold"
    >
      {value}
    </button>
  );
};

export default Square;
