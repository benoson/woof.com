import { InputAdornment } from "@mui/material";
import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCircularIcon from "../../assets/svgs/add_circular_icon.svg";
import chatIcon from "../../assets/svgs/chat_icon.svg";
import homeIcon from "../../assets/svgs/home_icon.svg";
import notificationIconSVG from "../../assets/svgs/notification_icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/svgs/search_icon.svg";
import appActionTypes from "../../redux/actionTypes/appActionTypes";
import { userSelector } from "../../redux/selectors";
import * as userService from "../../services/userService";
import NavbarDropDown from "./NavbarDropDown";
import NavbarItem from "./NavbarItem";

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
  searchContainer: {
    position: "relative",
  },
  searchResultsContainer: {
    position: "absolute",
    top: "60px",
    backgroundColor: "lightslategrey",
    padding: "10px 0",
    borderRadius: "3px",
    boxShadow: "0 6px 5px 0px #0000006b",
  },
  resultBox: {
    padding: "5px 15px",
    cursor: "pointer",
    color: "white",
    "&:hover": {
      // backgroundColor: "white",
    },
  },
  userResultImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  addFriendButton: {
    // width
  },
});

const Navbar = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const userFromState = useSelector(userSelector);

  const [anchorEl, setAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const assignAnchorElement = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const unAssignAnchorElement = () => {
    setAnchorEl(null);
  };

  const onUploadClick = () => {
    dispatch({ type: appActionTypes.DISPLAY_UPLOAD_SECTION });
  };

  const onSearchValueChange = async (event) => {
    const searchValue = event.target.value;
    setSearchValue(searchValue);
  };

  const onSearchFieldOutOfFocus = () => {
    setSearchResults([]);
  };

  useEffect(() => {
    if (searchValue.trim() !== "") {
      const getSearchResults = async () => {
        const searchResults = await userService.getSearchResults(searchValue);
        setSearchResults(searchResults);
      };

      getSearchResults();
    } else {
      unAssignAnchorElement();
      setSearchResults("");
    }
  }, [searchValue]);

  const isPopoverOpen = Boolean(anchorEl);

  return (
    <Grid container item xs={12} className={classes.container}>
      <Grid container item xs={4} alignItems="flex-end" className={classes.innerContainer} columnGap={4}>
        <Grid item xs={1}>
          <Popover
            open={isPopoverOpen}
            anchorEl={anchorEl}
            onClose={unAssignAnchorElement}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <NavbarDropDown userName={userFromState.userName} />
          </Popover>

          <NavbarItem main img={userFromState.profileImage} rounded onClick={assignAnchorElement} />
        </Grid>

        <Grid item xs={1}>
          <NavbarItem img={homeIcon} />
        </Grid>

        <Grid item xs={1}>
          <NavbarItem img={notificationIconSVG} />
        </Grid>

        <Grid item xs={1}>
          <NavbarItem img={chatIcon} />
        </Grid>

        <Grid item xs={1}>
          <NavbarItem img={AddCircularIcon} onClick={onUploadClick} />
        </Grid>
      </Grid>

      <Grid container item xs={4} alignItems="center" className={classes.innerContainer} columnGap={1}>
        <Grid item container xs={12} className={classes.searchContainer}>
          <TextField
            placeholder="Search people"
            InputProps={{
              autoFocus: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
            value={searchValue}
            onChange={(e) => {
              onSearchValueChange(e);
            }}
            variant="outlined"
            onBlur={onSearchFieldOutOfFocus}
          />

          {searchResults.length > 0 && (
            <Grid container item direction="column" className={classes.searchResultsContainer}>
              {searchResults.map((user, index) => (
                <Grid item container key={index} justifyContent="space-between" alignItems="center" className={classes.resultBox}>
                  <Grid item container xs={6} alignItems="center" columnGap={2}>
                    <Grid item>
                      <img src={user.image} className={classes.userResultImage} alt="" />
                    </Grid>

                    <Grid item>{user.name}</Grid>
                  </Grid>

                  <Grid item>
                    <img src={AddCircularIcon} className={classes.addFriendButton} alt="" />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
