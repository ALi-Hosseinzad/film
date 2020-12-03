import Typography from "@material-ui/core/Typography";
import React from "react";
import "./ContentHeader.css";
import ContetntItem from "./newContentItem";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const ContentHeader = (props) => {
  const classes = useStyles();
  const val = Object.values(props);
  return (
    <div className={classes.root}>
      {val.map((repo) => {
        if (repo.type === "regular_carousel") {
          return (
            <Grid className="items" container spacing={3} key={repo.id}>
              <Grid item xs={12} className="contenet-header">
                <Typography variant="h6" component="h6" key={repo.id}>
                  {`${repo.display_title}`}
                </Typography>
                <Button
                  className="contenet-header-btn"
                  key={repo.configuration.navigation_configuration.url}
                  href={repo.configuration.navigation_configuration.url}
                >
                  مشاهده همه
                </Button>
              </Grid>
              <Grid item xs={12}>
                <ContetntItem {...repo} />
              </Grid>
            </Grid>
          );
        }
      })}
    </div>
  );
};

export default ContentHeader;
