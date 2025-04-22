import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div>
      {item.id} {item.title}
    </div>
  );
};

export default ProductCard;
