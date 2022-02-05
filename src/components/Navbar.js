import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import NavbarItem from "./NavbarItem";

import ben from "../assets/images/ben_with_guitar.jpg";
import notificationIconSVG from "../assets/svgs/notification_icon.svg";
import chatIcon from "../assets/svgs/chat_icon.svg";
import homeIcon from "../assets/svgs/home_icon.svg";

const styles = makeStyles({
  container: {
    boxShadow: "0 6px 5px 0px #0000001c",
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    zIndex: 999,
  },
  innerContainer: {
    padding: "15px 25px",
  },
});

const Navbar = () => {
  const classes = styles();

  return (
    <Grid container item xs={12} className={classes.container}>
      <Grid
        container
        item
        xs={4}
        alignItems="flex-end"
        className={classes.innerContainer}
        columnGap={1}
      >
        <Grid item xs={2}>
          <NavbarItem main img={ben} rounded />
        </Grid>

        <Grid item xs={2}>
          <NavbarItem img={homeIcon} />
        </Grid>

        <Grid item xs={2}>
          <NavbarItem img={notificationIconSVG} />
        </Grid>

        <Grid item xs={2}>
          <NavbarItem img={chatIcon} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
