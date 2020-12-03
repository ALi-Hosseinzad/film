import React from "react";
import ContentHeader from "./ContentHeader";
import ContentImg from "./ContentImg";
import "./ContentItem.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "start",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  },
}));
const ContetntItems = (props) => {
  const classes = useStyles();
  const { repos } = props;
  if (!repos || repos.length === 0) return <p style={{textAlign:"center",margin:"auto"}}>server don't responce , sorry</p>;
  const val = Object.values(repos);
  return (
    <div className={classes.root}>
      {val.map((repo) => {
        return (
          <Grid container spacing={3} className="content-body" key={repo}>
            <Grid item xs={12} >
              <Paper className={classes.paper} style={{ boxShadow: "none" }}>
                <ContentHeader {...repo} />
                <ContentImg {...repo} />
              </Paper>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default ContetntItems;
