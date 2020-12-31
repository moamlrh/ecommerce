import { Favorite, ShoppingBasket, Menu as MenuIcon } from "@material-ui/icons";
import React, { useState } from "react";
import logo from "../../utili/images/logo.png";
import ResponsiveDrawer from "./Drawer";
import { MenuItems } from "./utiliFuncs";

const MenuNavbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [ahnchorEl, setAnchorEl] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleOpenPagesMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <div className="menu-nv">
      <div className="logo">
        <img src={logo} alt="OGANI" />
        <MenuIcon className="menu-icon" onClick={handleDrawerToggle} />
      </div>
      <div className="menu">
        <h3>HOME</h3>
        <h3>SHOPE</h3>
        <h3 onClick={handleOpenPagesMenu}>PAGES</h3>
        <MenuItems ahnchorEl={ahnchorEl} setAnchorEl={setAnchorEl} />
        <h3>BLOG</h3>
        <h3>CONTACT</h3>
      </div>
      <div className="cart-heart">
        <Favorite className="heart" />
        <ShoppingBasket className="shop" />
        <h3>
          <span>items:</span>
          <h4>$155</h4>
        </h3>
      </div>
      <ResponsiveDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </div>
  );
};

export default MenuNavbar;
