import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));
const MainLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     ali
    </div>
  );
};

export default MainLayout;
