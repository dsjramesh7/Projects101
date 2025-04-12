import React from "react";
import MenuItem from "../menu-item";

const MenuUI = ({ menus = [] }) => {
  return (
    <ul className="ml-4 mt-2 space-y-1">
      {menus && menus.length > 0
        ? menus.map((item, index) => <MenuItem key={index} item={item} />)
        : null}
    </ul>
  );
};

export default MenuUI;
