import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function FliterGroupingItems() {
  const classes = useStyles();
  const [state, setState] = useState([]);

  function handleClick(eve) {
    const val = [...state];
    var index = val.indexOf(eve);
    if (index !== -1) {
      val.splice(index, 1);
      setState(val);
    } else {
      setState(prev=>[...prev,eve]);
    }
  }

  const arr = [
    "فیلم تئاتر",
    "کودک و نوجوان",
    "فیلم کوتاه",
    "انیمیشن",
    "مستند",
    "داناشو ",
  ];
  return (
    <div className={classes.root}>
      {arr.map((item, index) => (
        <Chip
          key={index}
          variant="outlined"
          size="medium"
          label={item}
          onClick={() => handleClick(item)}
          className={`filterBtn ${
            state.indexOf(item) === index ? "filter-selected" : null
          }`}
        />
      ))}
    </div>
  );
}
