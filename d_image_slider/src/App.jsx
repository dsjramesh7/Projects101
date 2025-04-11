import React from "react";
import ImageSlider from "./components/image-slider";

const App = () => {
  const url = "https://picsum.photos/v2/list";
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <ImageSlider url={url} limit={"5"} page={"1"} />
    </div>
  );
};

export default App;
