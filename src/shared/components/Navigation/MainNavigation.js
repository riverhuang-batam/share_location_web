import React, {useState} from "react";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from './NavLinks'
import { Link } from "react-router-dom";
const MainNavigation = (props) => {
  const [openNav, setOpenNav] = useState(true)
  const openToggle = () => {
    setOpenNav(!openNav)
  }
  return (
    <React.Fragment>
    <MainHeader>
      {/* <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlaces</Link>
      </h1>
      <nav>...</nav> */}
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <Link to="/" className="navbar-brand">
          YourPlaces
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          onClick={openToggle}
        >
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className={(openNav ?  'collapse ' : '') + ' navbar-collapse'}>
          <NavLinks/>
        </div>
      </nav>
    </MainHeader>
    </React.Fragment>
  );
};
export default MainNavigation;
