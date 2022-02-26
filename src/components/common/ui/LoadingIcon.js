import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Pepe from "../../../assets/images/pepe.jpg";

const styles = makeStyles({
  img: {
    width: "100px",
    animation: "$loading-animation 1.2s infinite",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@keyframes loading-animation": {
    "0%": {
      transform: "scale(1) rotate(0deg)",
    },
    "100%": {
      transform: "scale(2) rotate(360deg)",
    },
  },
});

const LoadingIcon = () => {
  const classes = styles();

  return (
    <Grid container justifyContent="center" alignItems="center">
      <img src={Pepe} className={classes.img} alt="" />
    </Grid>
  );
};

export default LoadingIcon;
