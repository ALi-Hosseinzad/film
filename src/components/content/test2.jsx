import React, { useEffect, useState } from "react";
import ContentLoading from "./ContentLoading";
import ContentItems from "./ContentItems";
import InfiniteScroll from "react-infinite-scroll-component";
import MainSlide from "./../slide/mainData";
import Card from "./../card/card";
import "./FetchContent.css";
import NavBar from "../navBar/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Footer from "../footer/footer";
import Scroll from '../scroll/Scroll'; 
import Filter from "../filter/filter";
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
const FetchItems = () => {
  const classes = useStyles();
  const apiurl = "http://api-v2.filmnet.ir/widgets/home-page?offset=";
  const ListLoading = ContentLoading(ContentItems);

  const [state, setState] = useState([]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading,setLoadeing] = useState(false)
  useEffect(() => {
    function getData(number) {
      var URL = apiurl + number + "&count=5";
      //setLoadeing(true)
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          if (count < res.meta.total_items_count) {
            setLoadeing(false)
            setState((prev) => [...prev, res]);
          } else {
            setHasMore(false);
          }
        });
    }
    getData(count);
  }, [count]);

  const arr = state.map((items, index) => {
    if (items.data[0].type === "main_slider") {
      return <MainSlide val={items.data} key={index + 1} />;
    } else {
      return null;
    }
  });
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Filter />
            <Scroll />
            <div>{arr}</div>
            <NavBar />
            <Card />
            <InfiniteScroll
              className="scroll"
              dataLength={state.length}
              next={() => setCount((prevCount) => prevCount + 5)}
              hasMore={hasMore}
              // val={console.log(count)}
              loader={<p className="loader">دریافت موارد بیشتر ...</p>}
            >
              {state.map((item, index) => (
                <ListLoading isLoading={loading} repos={item} key={index} />
              ))}
            </InfiniteScroll>
            <Footer />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default FetchItems;
