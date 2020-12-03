import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FliterGroupingItems from './fliterGroupingItems';
export default function FilterGrouping() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const color = "#17c37b";
  return (
    <div>
      <Typography variant="body1" component="span" className="filter-label">
        {" "}
        دسته بندی
      </Typography>
      <Button
        variant="contained"
        className="group-btn"
        onClick={handleClickOpen}
        endIcon={<ExpandMoreIcon className="group-icon" />}
      >
        دسته بندی ها
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">دسته بندی ها</DialogTitle>
          <FliterGroupingItems />
        <DialogActions>
          <Button onClick={handleClose} >
            انصراف
          </Button>
          <Button onClick={handleClose} style={{color:"#17c37b"}} autoFocus>
            اعمال فیلتر
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
