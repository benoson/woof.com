import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import classnames from "classnames";

const styles = makeStyles({
  mainContainer: {
    borderRadius: "15px",
    width: "87px",
    height: "87px",
    cursor: "pointer",
    "& img": {
      width: "100%",
      borderRadius: "15px",
    },
  },
  normalContainer: {
    borderRadius: "5px",
    padding: "3px",
    border: "1px solid lightslategrey",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "& img": {
      height: "100%",
    },
  },
});

const NavbarItem = ({ main, img }) => {
  const classes = styles();
  const styledContainer = classnames({
    [classes.normalContainer]: !main,
    [classes.mainContainer]: main,
  });

  return (
    <Grid item className={styledContainer} xs={12}>
      <img src={img} alt=""></img>
    </Grid>
  );
};

export default NavbarItem;
