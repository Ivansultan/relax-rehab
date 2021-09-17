import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "next/link";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Массажи
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <Link href={{ pathname: "/Japanese" }}>
          <MenuItem onClick={handleClose}>Японский</MenuItem>
        </Link>
        <Link href={{ pathname: "/Vietnamese" }}>
          <MenuItem onClick={handleClose}>Вьетнамский</MenuItem>
        </Link>
        <Link href={{ pathname: "/Relaxing" }}>
          <MenuItem onClick={handleClose}>Расслабляющий</MenuItem>
        </Link> 
        <Link href={{ pathname: "/Abdominal" }}>
          <MenuItem onClick={handleClose}>Массаж живота</MenuItem>
        </Link>
        <Link href={{ pathname: "/HomeMassage" }}>
          <MenuItem onClick={handleClose}>Массаж на дому</MenuItem>
        </Link> */}
      </Menu>
    </div>
  );
}
