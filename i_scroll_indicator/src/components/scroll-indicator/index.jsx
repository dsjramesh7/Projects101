import React from "react";

const ScrollIndicator = ({ productData = [], loading, errorMsg }) => {
  if (loading) {
    return <h1>Loading Data................</h1>;
  }
  if (errorMsg) {
    return <h1>Error-- ${errorMsg} </h1>;
  }
  // console.log(productData);
  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="font-bold text-3xl">Custom Scroll Indicator</h1>
      <div className="flex flex-col gap-4 items-center">
        {productData && productData.length > 0 ? (
          productData.map((item) => <p key={item.id}>{item.title}</p>)
        ) : (
          <h1>No products data found</h1>
        )}
      </div>
    </div>
  );
};

export default ScrollIndicator;
