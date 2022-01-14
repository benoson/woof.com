import React from "react";
import { makeStyles } from "@mui/styles";
import classnames from "classnames";
import Button from "@mui/material/Button";

const styles = makeStyles({
  containerButton: {
    borderRadius: "5px",
    padding: "3px",
    height: "42px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      height: "100%",
    },
  },
  rounded: {
    borderRadius: "50%",
  },
});

const NavbarItem = ({ img, rounded }) => {
  const classes = styles();
  const styledImage = classnames({
    [classes.rounded]: rounded,
  });

  return (
    <Button className={classes.containerButton} fullWidth>
      <img alt="" src={img} className={styledImage} />
    </Button>
  );
};

export default NavbarItem;
