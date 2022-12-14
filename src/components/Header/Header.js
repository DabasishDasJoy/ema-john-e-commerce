import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };
  return (
    <nav className="header-nav">
      <div className="nav-container">
        <img src={logo} alt="" />
        <div className="nav-list-container">
          <NavLink to="/">Shop</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/inventory">Inventory</NavLink>
          <NavLink to="/about">About</NavLink>
          {user && user.uid ? (
            <button onClick={handleSignOut}>SignOut</button>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
