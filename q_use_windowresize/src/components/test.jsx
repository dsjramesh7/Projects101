import React from "react";
import useWindowResize from "./use-resize";

const UseWindowResize = () => {
  const { height, width } = useWindowResize();
  return (
    <div>
      <h1>Use Window Resize Hook</h1>
      <div>
        <p>Width is {width}</p>
      </div>
      <div>
        <p>Width is {height}</p>
      </div>
    </div>
  );
};

export default UseWindowResize;
