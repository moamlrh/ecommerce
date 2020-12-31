import { Email, Facebook, LinkedIn, Person, Twitter } from "@material-ui/icons";
import React from "react";

const TopNavbar = () => {
  return (
    <div className="top-nv">
      <div className="left">
        <Email />
        <span>username@email.com</span>
        <h3>Free Shipping for all Order of $99</h3>
      </div>
      <div className="right">
        <div className="social">
          <Facebook />
          <Twitter />
          <LinkedIn />
        </div>
        <div className="language">English</div>
        <div className="login">
          <Person />
          <span>Login</span>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
