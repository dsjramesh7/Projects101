import React from "react";
import MenuUI from "./components/menu-ui";
import menus from "./data";

const App = () => {
  return (
    <div>
      <MenuUI menus={menus} />
    </div>
  );
};

export default App;
