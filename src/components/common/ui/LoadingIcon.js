import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Pepe from "../../../assets/images/pepe.jpg";

const styles = makeStyles({
  imgContainer: {
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "30%",
    boxShadow: "0px 0px 10px 0px #0000003b",
    zIndex: 999,
    borderRadius: "20px",
  },
  img: {
    width: "100px",
    animation: "$loading-animation 1.2s infinite",
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
    <Grid item container xs={3} justifyContent="center" alignItems="center" className={classes.imgContainer}>
      <img src={Pepe} className={classes.img} alt="" />
    </Grid>
  );
};

export default LoadingIcon;
