import React, { useState, useLayoutEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slidesShow.css";
import { Button } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = (props) => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    setSize([window.innerWidth, window.innerHeight]);
  }, []);
  const config = {
    dots: false,
    fade: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          dots: true,
          fade: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          fade: false,
        },
      },
    ],
  };
  const vals = Object.values(props);
  const val = vals[0].map((items) => {
    if (items.type === "main_slider") {
      const values = Object.values(items.configuration);
      const arr = values.map((value) => {
        return value;
      });
      return arr;
    }
  });
  const array = val.filter((item) => item !== undefined);
  const arr = array[0];
  const list = arr[0];
  const element = list.map((item) => {
    return item;
  });
  function responsive(x) {
    const [width, hight] = x;
    if (width >= 1024) {
      return `?w=1500`;
    }
    if (720 <= width && width <= 1024) {
      return `?w=720`;
    }
    if (width <= 720 && width !== 0) {
      return `?w=480`;
    }
    if (width === 0) {
      return null;
    }
  }

  const last = element.map((item, index) => (
    <div className="slides" key={index}>
      <div className="item-slider">
        <img src={item.image_path + responsive(size)} alt={item.title} />
      </div>
      {item.navigation_configuration.api_url ? (
        <div className="slide-btns">
          <Button
            href={item.navigation_configuration.api_url}
            className="slide-btn"
          >
            {item.navigation_button.title}
          </Button>
        </div>
      ) : null}
    </div>
  ));
  return (
    <React.Fragment>
      <Slider {...config}>{last}</Slider>
    </React.Fragment>
  );
};

export default Gallery;
