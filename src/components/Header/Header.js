import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-nav">
      <div className="nav-container">
        <img src={logo} alt="" />
        <div className="nav-list-container">
          <NavLink to="/">Shop</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/inventory">Inventory</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
