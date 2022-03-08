import { Button, InputAdornment } from "@mui/material";
import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddCircularIcon from "../../assets/svgs/add_circular_icon.svg";
import chatIcon from "../../assets/svgs/chat_icon.svg";
import homeIcon from "../../assets/svgs/home_icon.svg";
import notificationIconSVG from "../../assets/svgs/notification_icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/svgs/search_icon.svg";
import appActionTypes from "../../redux/actionTypes/appActionTypes";
import usersActionTypes from "../../redux/actionTypes/usersActionTypes";
import { userSelector } from "../../redux/selectors";
import * as userService from "../../services/userService";
import NavbarDropDown from "./NavbarDropDown";
import NavbarItem from "./NavbarItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

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
    width: "100%",
    position: "absolute",
    top: "60px",
    backgroundColor: "lightslategrey",
    padding: "10px 0",
    borderRadius: "5px",
    boxShadow: "0 6px 5px 0px #0000006b",
    zIndex: 999,
  },
  resultBox: {
    padding: "5px 15px",
  },
  userResultImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  searchResultsBackground: {
    height: "100vh",
    backgroundColor: "transparent",
    zIndex: 998,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

const Navbar = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userFromState = useSelector(userSelector);

  const [anchorEl, setAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchResultsBoxOpen, setIsSearchResultsBoxOpen] = useState(false);

  useEffect(() => {
    if (searchValue.trim() !== "") {
      const getSearchResults = async () => {
        const searchResults = await userService.getUsersSearchResults(
          searchValue
        );
        setSearchResults(searchResults);
        setIsSearchResultsBoxOpen(true);
      };

      getSearchResults();
    } else {
      unAssignAnchorElement();
      setSearchResults([]);
      setIsSearchResultsBoxOpen(false);
    }
  }, [searchValue]);

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
    setIsSearchResultsBoxOpen(false);
  };

  const onHomeButtonClick = () => {
    navigate("/");
  };

  const onAddFriendClick = (event, user) => {
    event.stopPropagation();
    dispatch({
      type: usersActionTypes.ADD_FRIEND_REQUEST,
      payload: { userName: user.name },
    });
  };

  const onFriendClick = (friendName) => {
    setSearchResults([]);
    setIsSearchResultsBoxOpen(false);
    navigate(`/profile/${friendName}`);
  };

  const isPopoverOpen = Boolean(anchorEl);

  return (
    <Grid container item xs={12} className={classes.container}>
      {/* MOVE THIS TO ANOTHER COMPONENT IN SAME FILE  */}
      {searchResults.length > 0 && (
        <div
          className={classes.searchResultsBackground}
          onClick={onSearchFieldOutOfFocus}
        ></div>
      )}

      <Grid
        container
        item
        xs={4}
        alignItems="flex-end"
        className={classes.innerContainer}
        columnGap={4}
      >
        <Grid item xs={1}>
          <Popover
            open={isPopoverOpen}
            anchorEl={anchorEl}
            onClose={unAssignAnchorElement}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <NavbarDropDown userName={userFromState.userName} />
          </Popover>

          <NavbarItem
            main
            img={userFromState.profileImage}
            rounded
            onClick={assignAnchorElement}
          />
        </Grid>

        <Grid item xs={1} onClick={onHomeButtonClick}>
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

      <Grid
        container
        item
        xs={4}
        alignItems="center"
        className={classes.innerContainer}
        columnGap={1}
      >
        <Grid item container xs={12} className={classes.searchContainer}>
          <TextField
            placeholder="Search people"
            InputProps={{
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
          />

          {isSearchResultsBoxOpen > 0 && (
            <List className={classes.searchResultsContainer}>
              {searchResults.map((user, index) => (
                <>
                  <ListItem
                    button
                    onClick={() => {
                      onFriendClick(user.name);
                    }}
                  >
                    <Grid
                      item
                      container
                      key={index}
                      justifyContent="space-between"
                      alignItems="center"
                      className={classes.resultBox}
                    >
                      <Grid
                        item
                        container
                        xs={6}
                        alignItems="center"
                        columnGap={2}
                      >
                        <Grid item>
                          <img
                            src={user.image}
                            className={classes.userResultImage}
                            alt=""
                          />
                        </Grid>

                        <Grid item>
                          <Typography color="white">{user.name}</Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        item
                        onClick={(event) => {
                          onAddFriendClick(event, user);
                        }}
                      >
                        <Button disableElevation disableRipple variant="filled">
                          <img src={AddCircularIcon} alt="" />
                        </Button>
                      </Grid>
                    </Grid>
                  </ListItem>

                  {index !== searchResults.length - 1 && <Divider />}
                </>
              ))}
            </List>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
