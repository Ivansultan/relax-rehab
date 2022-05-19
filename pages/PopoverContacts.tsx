import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";

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
        <span style={{ fontSize: "medium" }}>
          <FormattedMessage id="Contacts" defaultMessage="Contacts" />
        </span>
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
            <ul>
              <FormattedMessage id="Kyiv" defaultMessage="Kyiv" />
            </ul>
            <ul>
              <FormattedMessage
                id="tel. +38 (093) 110-44-35"
                defaultMessage="tel. +38 (093) 110-44-35"
              />
            </ul>
            <ul>
              <FormattedMessage
                id="tel. +38 (066) 118-16-08"
                defaultMessage="tel. +38 (066) 118-16-08"
              />
            </ul>
            <ul>
              Email:{" "}
              <a className="email-link" href="mailto:jen.solty@gmail.com">
                jen.solty@gmail.com
              </a>
            </ul>
            <ul>
              <FormattedMessage
                id="Yevgeny Soltynchuk"
                defaultMessage="Yevgeny Soltynchuk"
              />
            </ul>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
