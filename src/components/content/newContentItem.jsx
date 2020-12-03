import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import IMDB from "../../image/imdb.png";
import "./ContentItem.css";

const useStyles = makeStyles({
  root: {
    width: 156,
    display: "inline-block",
    margin: "4px",
  },
  media: {
    height: 200,
    width: "100%",
  },
});

const ContetntItem = (props) => {
  const classes = useStyles();
  const vals = Object.values(props);
  const element = Object.values(vals[1]);
  const items = element[0];
  const item = Object.values(items);
  
function list (end) {
    const element = [];
    for (let index = 0; index <= end; index++) {
      element.push(item[index]);
    }
    return element;
  }
  const dataList = list(7);
  function cheakRate(x) {
    if (x/10 !== 0) {
      return Math.round(x)/10;
    } else {
      return <span > --- </span>;
    }
  }
  return (
    <div className="items">
      {dataList.map((data) => {
        return (
          <Card className={classes.root} key={data.video_content.short_id}>
            <Typography
              component={"a"}
              key={data.video_content.supper_title}
              href={
                "https://filmnet.ir/contents/" +
                data.video_content.short_id +
                "/" +
                data.video_content.supper_title
              }
            >
              <CardActionArea>
                <CardMedia
                  key={data.video_content.cover_image.path}
                  className={classes.media}
                  image={data.video_content.poster_image.path}
                  title={data.video_content.supper_title}
                />
                <CardContent className="item">
                  <Typography
                    variant="body1"
                    gutterBottom
                    className="item-header"
                    key={data.video_content.title}
                  >{`${data.video_content.title}`}</Typography>
                  <Typography
                    component={"div"}
                    className="item-text"
                    key="icon-star"
                  >
                    <Typography
                      variant="body2"
                      gutterBottom
                      className="item-icon"
                      key="star"
                    >
                      <StarIcon />{" "}
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      className="item-rate"
                      key={data.video_content.rate}
                    >
                      {Math.round(data.video_content.rate) / 10}
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      className="item-imdb-text"
                      key="imdb-rate"
                    >
                      {cheakRate(data.video_content.imdb_rank_percent)}
                    </Typography>
                    <Typography
                      component={"img"}
                      src={IMDB}
                      key="IMDB"
                      alt="IMDB"
                      className="item-imdb-img"
                    />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Typography>
          </Card>
        );
      })}
    </div>
  );
};
export default ContetntItem;
