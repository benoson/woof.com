import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import NavbarItem from "./NavbarItem";
import notificationIconSVG from "../../assets/svgs/notification_icon.svg";
import chatIcon from "../../assets/svgs/chat_icon.svg";
import homeIcon from "../../assets/svgs/home_icon.svg";
import AddCircularIcon from "../../assets/svgs/add_circular_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import appActionTypes from "../../redux/actionTypes/appActionTypes";
import { userSelector } from "../../redux/selectors";
import Popover from "@mui/material/Popover";
import NavbarDropDown from "./NavbarDropDown";

const styles = makeStyles({
  container: {
    boxShadow: "0 6px 5px 0px #0000006b",
    position: "sticky",
    top: 0,
    backgroundColor: "#4FD3C4",
    zIndex: 999,
  },
  innerContainer: {
    padding: "15px 25px",
  },
  popoverContent: {
    padding: "10px",
  },
});

const Navbar = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const userFromState = useSelector(userSelector);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileImageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const isPopoverOpen = Boolean(anchorEl);

  const onUploadClick = () => {
    dispatch({ type: appActionTypes.DISPLAY_UPLOAD_SECTION });
  };

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
          <Popover
            open={isPopoverOpen}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <NavbarDropDown userName={userFromState.userName} />
          </Popover>

          <NavbarItem
            main
            img={userFromState.profileImage}
            rounded
            onClick={handleProfileImageClick}
          />
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

        <Grid item xs={2}>
          <NavbarItem img={AddCircularIcon} onClick={onUploadClick} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
