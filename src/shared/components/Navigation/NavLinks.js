import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";
const NavLinks = (props) => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" exact>
          All User
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/u1/places" className="nav-link">My Places</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/places/new" className="nav-link">Add Place</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/auth" className="nav-link">Authenticate</NavLink>
      </li>
    </ul>
  );
};
export default NavLinks;
