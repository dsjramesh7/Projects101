import React, { useRef, useState } from "react";
import useOutSideClick from "./use-outside-click";

const UseonClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutSideClick(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>hishaburi Dana Mugiwara !!!!</h1>
          <p>click outside to close</p>
          <p>it won't close when you click inside bakayaro</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseonClickOutsideTest;
