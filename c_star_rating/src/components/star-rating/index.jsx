import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // console.log([...Array(noOfStars)]);
  const handleRating = (getCurrentStarIndex) => {
    // console.log(getCurrentStarIndex);
    setRating(getCurrentStarIndex);
  };
  const handleMouseEnter = (getCurrentStarIndex) => {
    // console.log(getCurrentStarIndex);
    setHover(getCurrentStarIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="flex justify-center mt-4 gap-4">
      {[...Array(noOfStars)].map((_, index) => {
        index = index + 1;
        return (
          <FaStar
            size={40}
            className={index <= hover || rating ? "active" : "inactive"}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleRating()}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
