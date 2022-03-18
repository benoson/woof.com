import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Register from "./Register";
import Login from "./Login";
import MainLogo from "../assets/svgs/logos/MainLogo.svg";

const styles = makeStyles({
  container: {
    padding: "20px 0px",
  },
  mainLogo: {
    width: "300px",
  },
});

const RegisterOrLogin = () => {
  const classes = styles();

  return (
    <Grid item container justifyContent={"center"} className={classes.container}>
      <Grid item>
        <img src={MainLogo} className={classes.mainLogo} />
      </Grid>

      <Grid item container justifyContent={"center"}>
        <Grid item xs={5}>
          <Register />
        </Grid>

        <Divider orientation="vertical" />

        <Grid item xs={5}>
          <Login />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegisterOrLogin;
