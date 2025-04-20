import React, { useEffect } from "react";

const useOutSideClick = (reference, handler) => {
  useEffect(() => {
    const listeners = (event) => {
      if (!reference.current || reference.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listeners);
    document.addEventListener("touchstart", listeners);

    return () => {
      document.removeEventListener("mousedown", listeners);
      document.removeEventListener("touchstart", listeners);
    };
  }, [reference, handler]);
  return <div>useOutSideClick</div>;
};

export default useOutSideClick;
