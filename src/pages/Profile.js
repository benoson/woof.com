import React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const {userName} = useParams()
    const userData = await axios.get

  return (
    <Grid container item>
      <Grid item container xs={10}>
        <Grid item xs={4}>
          <img src= />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
