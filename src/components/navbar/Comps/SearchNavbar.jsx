import { ArrowDropDown, Call, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import ResponsiveDrawer from "./Drawer";

const items = [
  { id: 0, text: "Fresh Meat" },
  { id: 1, text: "Vegetables" },
  { id: 2, text: "Fruit & Nut Gifts" },
  { id: 3, text: "Ocean Foods" },
  { id: 4, text: "FastFood" },
  { id: 5, text: "Butter & Eggs" },
  { id: 6, text: "Oatmeal" },
  { id: 7, text: "Fresh Bananas" },
];

const SearchNavbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  
  const handleShowMenu = (e) => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="search-nv">
      <div className="left-menu">
        <div className="title" onClick={handleShowMenu}>
          <Menu />
          <span>All departments</span>
          <ArrowDropDown className="arow-icon" />
        </div>
        <div className={`items ${showMenu ? "show-items" : "hide-items"}`}>
          {items.map((item) => (
            <h4 key={item.id}>{item.text}</h4>
          ))}
        </div>
      </div>
      <div className="search-input">
        <div className="all-categories">
          <h4>All Categories</h4>
          <ArrowDropDown />
        </div>
        <input type="text" placeholder="Whate do you need ?" />
        <button>SEARCH</button>
      </div>
      <div className="right-info">
        <Call />
        <div className="number">
          <h3>+2143578689</h3>
          <span>support 24/7 time</span>
        </div>
      </div>
    </div>
  );
};

export default SearchNavbar;
