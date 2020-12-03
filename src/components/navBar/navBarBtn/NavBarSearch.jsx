import React from "react";
import "../navBar.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
const NavBarSearch = () => {
    const [active, setActive] = React.useState(null);
  return (
    <div
      tabIndex="1"
      className={`search ${active}`}
      // onClick={() => setActive("activeLine")} 
    >
      <TextField
       onClick={() => setActive("activeLine")}
       onBlur={() => setActive(null)}
        placeholder="جستجو کردن ..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img
                src="https://filmnet.ir/static/images/ic-search-off.png"
                alt="جستجو"
              />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
export default NavBarSearch;
