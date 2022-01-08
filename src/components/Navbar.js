import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import NavbarItem from "./NavbarItem";

import wLogo from "../assets/images/W logo.png";
import ben from "../assets/images/ben_with_guitar.jpg";
import notificationIconSVG from "../assets/svgs/notification_icon.svg";
import chatIcon from "../assets/svgs/chat_icon.svg";

const styles = makeStyles({
  container: {
    borderBottom: "1px solid lightslategrey",
    boxShadow: "0 6px 5px 0px #0000001c",
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
        columnGap={2}
      >
        <Grid item xs={2}>
          <NavbarItem main img={ben} />
        </Grid>

        <Grid container item xs={8} spacing={1}>
          <Grid container item xs={3}>
            <NavbarItem img={wLogo} />
          </Grid>

          <Grid container item xs={3}>
            <NavbarItem img={notificationIconSVG} />
          </Grid>

          <Grid container item xs={3}>
            <NavbarItem img={chatIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
