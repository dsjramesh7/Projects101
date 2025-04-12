import React from "react";
import MenuItem from "../menu-item";

const MenuUI = ({ menus = [] }) => {
  return (
    <ul>
      {menus && menus.length > 0
        ? menus.map((item, index) => <MenuItem key={index} item={item} />)
        : null}
    </ul>
  );
};

export default MenuUI;
