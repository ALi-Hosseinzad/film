import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./card.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Cards = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className="wrapper">
        <Grid item xs={4} style={{ padding: "8px" }}>
          <Card className="card">
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                  خرید اشتراک
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="body"
                >
                  با خرید اشتراک فیلم‌نت می‌توانید از تمامی فیلم‌ها و سریال‌ها
                  به راحتی استفاده کنید.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className="footer" href="/buy">
                خرید اشتراک
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} style={{ padding: "8px" }}>
          <Card className="card">
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h6" >
                  دانلود فیلم و تماشا به صورت آفلاین
                  
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="body"
                >
                  بشما میتوانید با نسخه وب و یا اندروید فیلم ها را دانلود و
                  تماشا کنید.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className="footer" href="/buy">
                <CloudDownloadIcon style={{marginLeft:"10px"}}/>
                دانلود اپلیکیشن اندروید
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} style={{ padding: "8px" }}>
          <Card className="card">
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                  دانلود فیلم و تماشا به صورت آفلاین
                </Typography>
              </CardContent>
              <CardMedia
                height="60"
                component="img"
                alt="Contemplative Reptile"
                image="https://filmnet.ir/static/images/all-devices-black.svg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="body"
                >
                  تماشای بی‌نهایت فیلم و سریال روی تلفن همراه، تبلت، لپ تاپ،
                  تلویزیون
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
