import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./filter.css";
import { Typography } from "@material-ui/core";
export default function LabelBottomNavigation() {
  const [active, setActive] = useState(null);
  function handelActive(target) {
    setActive(target);
  }
  const arr =[[0,"Film","فیلم"],[1,"Serie","سریال"],[2,"Collection","مجموعه"]];
  return (
    <Fragment>
      <Typography variant="h6" component="h2" className="filter-label">
        {" "}
        نوع
      </Typography>
      <ButtonGroup size="large" className="filter-btns" >
      {arr.map((item,index)=>(
        <Button
          className={`filterBtn ${active === index ? "filter-selected" : null}`}
          key={index}
          onClick={() => handelActive(item[0])}
        >
          {item[2]}
        </Button>
      ))}
        
      </ButtonGroup>
    </Fragment>
  );
}
