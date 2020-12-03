import React, { Fragment, useEffect, useState, forwardRef} from "react";
import "./navBar.css";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link/Link";
import List from "@material-ui/core/List";

const NavBarMenu = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    function getData() {
      var URL = "https://api-v2.filmnet.ir/hyperlinkMenus/";
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          setState((prev) => [...prev, res.data[0].items]);
        });
    }
    getData();
  }, []);
  return (
    <List className="navBarList">
      {state.map((items,i) => {
        return (
          <Fragment key={i}>
            {items.map((item, index) => (
              <MenuItem
                className="navBarItem"
                key={index}
              >
                <Link
                  href={item.configuration.url}
                  className="navBarLink"
                  key={item.id}
                >
                  {item.display_title}
                </Link>
              </MenuItem>
            ))}
          </Fragment>
        );
      })}
    </List>
  );
};
export default forwardRef(NavBarMenu);
