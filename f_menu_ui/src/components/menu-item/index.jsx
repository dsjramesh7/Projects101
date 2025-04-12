import React, { useState } from "react";
import MenuUI from "../menu-ui";

const MenuItem = ({ item = [] }) => {
  const [displayCurrentMenuChildren, setDisplayCurrentMenuChildren] = useState(
    {}
  );

  const handleToggleMenu = (getCurrentLabel) => {
    setDisplayCurrentMenuChildren((prev) => ({
      ...prev,
      [getCurrentLabel]: !prev[getCurrentLabel],
    }));
  };

  const isOpen = displayCurrentMenuChildren[item.label];

  return (
    <li className="list-none">
      <div
        onClick={() => handleToggleMenu(item.label)}
        className={`flex items-center justify-between cursor-pointer px-4 py-2 rounded-lg transition-all
          ${isOpen ? "bg-blue-100" : "bg-gray-100 hover:bg-gray-200"}
        `}
      >
        <p className="text-gray-800 font-semibold">{item.label}</p>
        {item.children && item.children.length > 0 && (
          <span className="transition-transform duration-200 text-gray-600">
            {isOpen ? "🔽" : "▶️"}
          </span>
        )}
      </div>

      {item.children && item.children.length > 0 && isOpen && (
        <div className="ml-4 border-l-2 border-blue-300 pl-3 mt-1">
          <MenuUI menus={item.children} />
        </div>
      )}
    </li>
  );
};

export default MenuItem;
