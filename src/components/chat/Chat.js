import React, { useState } from "react";
import {
  Grid,
  Collapse,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { friendsSelector } from "../../redux/selectors";

const styles = makeStyles({
  container: {
    width: "250px",
    position: "fixed",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    borderTopRightRadius: "10px",
    border: "1px solid #77889973",
  },
  chatBoxHeader: {
    cursor: "pointer",
    padding: "8px 0",
    borderTopRightRadius: "10px",
    backgroundColor: "#4FD3C4",
  },
  img: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  collapse: {
    width: "100%",
  },
});

const Chat = () => {
  const classes = styles();

  const friends = useSelector(friendsSelector);
  const [isExpanded, setIsExpanded] = useState(false);

  const onChatBoxClick = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Grid container item className={classes.container}>
      <Grid
        item
        xs={12}
        onClick={onChatBoxClick}
        className={classes.chatBoxHeader}
      >
        <Typography>Friends ({friends.length || 0})</Typography>
      </Grid>

      <Grid item container>
        <Collapse in={isExpanded} className={classes.collapse}>
          {friends.length > 0 ? (
            <List>
              {friends.map((friend, index) => (
                <ListItem
                  key={friend.name}
                  button
                  divider={index !== friends.length - 1}
                >
                  <ListItemAvatar>
                    <img src={friend.image} alt="" className={classes.img} />
                  </ListItemAvatar>

                  <ListItemText>{friend.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          ) : (
            <Grid item>
              <Typography>No friends yet</Typography>
            </Grid>
          )}
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default Chat;
