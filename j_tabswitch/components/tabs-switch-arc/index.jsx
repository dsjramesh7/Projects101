import React, { useState } from "react";

const TabsSwitchArc101 = ({ tabContent, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnClick = (getCurrentIndex) => {
    console.log("getCurrentIndex: ", getCurrentIndex);
    setCurrentIndex(getCurrentIndex);
    onChange(currentIndex);
  };
  return (
    <div className="wrapper">
      <div className="heading">
        {tabContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabContent[currentIndex] && tabContent[currentIndex].content}
      </div>
    </div>
  );
};

export default TabsSwitchArc101;
