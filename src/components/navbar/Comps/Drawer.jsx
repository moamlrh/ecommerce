import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core";
import logo from "../../utili/images/logo.png";
import {
  ArrowDropDown,
  Facebook,
  Favorite,
  LinkedIn,
  Person,
  ShoppingBasket,
  Twitter,
} from "@material-ui/icons";

const DrawerStyled = withStyles(() => ({
  paper: {
    width: "250px",
  },
}))(Drawer);

function ResponsiveDrawer({ mobileOpen, handleDrawerToggle }) {
  const [showPageItems, setShowPageItems] = useState(false);
  return (
    <DrawerStyled
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
    >
      <div className="drawer">
        <img src={logo} alt="logo" />
        <div className="cart-heart">
          <Favorite className="heart" />
          <ShoppingBasket className="shop" />
          <h3>
            <span>items:</span>
            <h4>$155</h4>
          </h3>
        </div>
        <div className="login">
          <div className="language">English</div>
          <Person />
          <span>Login</span>
        </div>
        <div className="menu">
          <h3>HOME</h3>
          <h3>SHOPE</h3>
          <div className="pages">
            <h3 onClick={() => setShowPageItems(!showPageItems)}>
              PAGES <ArrowDropDown />
            </h3>
            <div
              className="page-items"
              style={{ height: showPageItems ? "170px" : "0" }}
            >
              <h3>Shop Details</h3>
              <h3>Shopping Cart</h3>
              <h3>Check Out</h3>
              <h3>Blog Details</h3>
            </div>
          </div>
          <h3>BLOG</h3>
          <h3>CONTACT</h3>
        </div>
        <div className="social">
          <Facebook />
          <Twitter />
          <LinkedIn />
        </div>
      </div>
    </DrawerStyled>
  );
}

export default ResponsiveDrawer;
