import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="contacts">
      <Button
        style={{
          width: "100%",
          backgroundColor: "transparent",
          opacity: 1,
          color: "white",
          border: "1px solid white",
        }}
        aria-describedby={id}
        // variant="contained"
        color="default"
        onClick={handleClick}
      >
        <span style={{ fontSize: "medium" }}>Контакты</span>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          <div>
            <ul>г. Киев</ul>
            <ul>тел. +38 (093) 110-44-35</ul>
            <ul>тел. +38 (066) 118-16-08</ul>
            <ul>Email: jen.solty@gmail.com</ul>
            <ul>Евгений Солтынчук</ul>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
