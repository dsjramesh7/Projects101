import React from "react";

const ScrollIndicator = ({
  productData = [],
  loading,
  errorMsg,
  scrollPercentage,
}) => {
  if (loading) {
    return <h1>Loading Data................</h1>;
  }
  if (errorMsg) {
    return <h1>Error-- ${errorMsg} </h1>;
  }
  // console.log(productData);
  return (
    <div>
      <div className="top-container">
        <h1 className="font-bold text-3xl">Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
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
