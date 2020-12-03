import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./ContentImg.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const ContentImg = (props) => {
  const classes = useStyles();
  const val = Object.values(props);

  return (
    <div className={classes.root} >
      {val.map(repo => {
        if (repo.type === "poster") {
          const vals = repo.configuration.items;
          const item = vals[0];
          return (
            <Grid container spacing={1} key={repo.id}>
              <Grid item xs={12} key={repo.id} >
                <a key={repo.id}
                  href={"https://filmnet.ir/" + item.navigation_configuration.api_url}
                  className="content-img"
                >
                  <img key={item.image_id} src={item.image_path} alt={repo.display_title} />
                </a>
              </Grid>
            </Grid>
          );
        }
      })}
    </div>
  );
};
export default ContentImg;
