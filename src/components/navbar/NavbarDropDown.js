import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import userActionTypes from "../../redux/actionTypes/usersActionTypes";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const styles = makeStyles({
  redText: {
    color: "rgb(244, 67, 54)",
  },
});

const NavbarDropDown = ({ userName }) => {
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch({ type: userActionTypes.LOGOUT });
    navigate("/login");
  };

  return (
    <Grid container>
      <List>
        <ListItem>{userName}</ListItem>

        <ListItem button onClick={onLogoutClick} className={classes.redText}>
          Logout
        </ListItem>
      </List>
    </Grid>
  );
};

export default NavbarDropDown;
