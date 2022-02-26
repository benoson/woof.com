import React from "react";
import ContainerButton from "../common/ui/ContainerButton";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import userActionTypes from "../../redux/actionTypes/usersActionTypes";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const styles = makeStyles({
  popoverContent: {
    padding: "0px 10px",
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
    <Grid container className={classes.popoverContent}>
      <List>
        <ListItem>
          <ListItemText primary={userName} />
        </ListItem>

        <Divider />

        <ListItem button>
          <ContainerButton onClick={onLogoutClick}>Logout</ContainerButton>
        </ListItem>
      </List>
    </Grid>
  );
};

export default NavbarDropDown;
