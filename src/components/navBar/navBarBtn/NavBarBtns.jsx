import React from "react";
import "../navBar.css";
import List from "@material-ui/core/List";
import Login from "../../login/login";
// import  Link  from "@material-ui/core/Link/Link";
const NavBarBtns = (props) => {
  return (
    <List className="navBarList">
      <Login />
      <a className="navBarBtn" href="/">
        <button className="Btn2" >خرید اشترک</button>
      </a>
    </List>
  );
};
export default NavBarBtns;
