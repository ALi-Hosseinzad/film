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
import Scroll from "../scroll/Scroll";
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

  const [state, setState] = useState({
    data: [],
    count: 0,
    hasMore: true,
    loading: false,
  });

  useEffect(() => {
    function getData(number) {
      var URL = apiurl + number + "&count=5";
      //setLoadeing(true)
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          if (state.count < res.meta.total_items_count) {
            setState({ ...state, data: [res], loading: false });
          } else {
            setState({ ...state, hasMore: false });
          }
        });
    }
    getData(state.count);
  }, [state.count]);

  const arr = state.data.map((items, index) => {
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
              dataLength={state.count}
              next={() =>
                setState((prevState) => ({
                  ...prevState,
                  count: prevState.count + 5,
                }))
              }
              hasMore={state.hasMore}
              // val={console.log(count)}
              loader={<p className="loader">دریافت موارد بیشتر ...</p>}
            >
              {state.data.map((item, index) => (
                <ListLoading
                  isLoading={state.loading}
                  repos={item}
                  key={index}
                />
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
