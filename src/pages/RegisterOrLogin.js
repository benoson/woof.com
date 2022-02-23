import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Register from "./Register";
import Login from "./Login";

const RegisterOrLogin = () => {
  return (
    <Grid item container justifyContent={"center"}>
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
