import React from "react";
import MenuNavbar from "./Comps/MenuNavbar";
import SearchNavbar from "./Comps/SearchNavbar";
import TopNavbar from "./Comps/TopNavbar";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <TopNavbar />
      <MenuNavbar />
      <SearchNavbar />
    </div>
  );
};

export default Navbar;
