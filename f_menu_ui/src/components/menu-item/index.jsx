import React, { useState } from "react";
import MenuUI from "../menu-ui";

const MenuItem = ({ item = [] }) => {
  const [displayCurrentMenuChildren, setDisplayCurrentMenuChildren] = useState(
    {}
  );

  const handleToggleMenu = (getCurrentLabel) => {
    // console.log(getCurrentLabel);
    setDisplayCurrentMenuChildren({
      ...displayCurrentMenuChildren,
      [getCurrentLabel]: !displayCurrentMenuChildren[getCurrentLabel],
    });
  };

  console.log(displayCurrentMenuChildren);
  return (
    <li>
      <div className="flex gap-4" onClick={() => handleToggleMenu(item.label)}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? <span>➕</span> : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentMenuChildren[item.label] ? (
        <MenuUI menus={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
