import React from "react";
import "./Footer.scss";
import logo from "../utili/images/logo.png";
import payment from "../utili/images/payment-item.png";

import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="left-side">
          <img src={logo} alt="logo" />
          <h3>
            <span>Address:</span> 60-49 Road 11378 Najaf
          </h3>
          <h3>
            <span>Phone:</span> +1235467809
          </h3>
          <h3>
            <span>Email:</span> username@email.com
          </h3>
        </div>
        <div className="center-side">
          <h3>Useful Links</h3>
          <div className="useful">
            <div>
              <h4>About Us</h4>
              <h4>About Our Shope</h4>
              <h4>Secure Shopping</h4>
              <h4>Delivery infomation</h4>
              <h4>Privacy Policy</h4>
              <h4>Our Sitemap</h4>
              <h4>Who We Are</h4>
              <h4>Our Services</h4>
            </div>
            <div>
              <h4>Testimonials</h4>
              <h4>Projects</h4>
              <h4>Innovation</h4>
              <h4>Contact</h4>
            </div>
          </div>
        </div>
        <div className="right-side">
          <h3>Join Our Newsletter Now</h3>
          <p>Get E-mail updates about our latest shop and special offers.</p>
          <div className="input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="icons">
            <Facebook />
            <Twitter />
            <LinkedIn />
            <GitHub />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>
          Copyright ©2020 All rights reserved | This template is made by
          <span>Moaml RH</span>
        </h4>
        <img src={payment} alt="payment-item" />
      </div>
    </>
  );
};

export default Footer;
