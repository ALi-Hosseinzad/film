import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
import "./navBar.css";
import NavBarItem from "./navBarBtn/NavBarItem";
import NavBarMenu from "./NavBarMenu";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "contents",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const ref = React.createRef();
  //const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <NavBarMenu ref={ref} />
      </Menu>
    </>
  );

  return (
    <div className="navBar">
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.root}>
              <Link className="logo" href="/">
                <img
                  src="https://filmnet.ir/static/images/filmnet-logo.png?tag=v0.1.214-filmnet"
                  alt="logo"
                />
              </Link>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div className="navBarItems">
                <NavBarMenu />
              </div>
            </div>
            <div className="navBarBtns">
              <NavBarItem />
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    </div>
  );
}
