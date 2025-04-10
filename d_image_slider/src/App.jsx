import React from "react";
import ImageSlider from "./components/image-slider";

const App = () => {
  const url = "https://picsum.photos/v2/list";
  return (
    <>
      <ImageSlider url={url} limit={"5"} page={"1"} />
    </>
  );
};

export default App;
