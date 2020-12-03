import React, { Fragment } from "react";
import "../navBar.css";
import NavBarBtns from "./NavBarBtns";
import NavBarSearch from "./NavBarSearch";
const NavBarItems = (props) => {
  return (
    <Fragment>
      <NavBarBtns />
      <NavBarSearch />
    </Fragment>
  );
};
export default NavBarItems;
