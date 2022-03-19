import React, { useState } from "react";
import {
  Grid,
  Collapse,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
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
    boxShadow: "0px 0px 3px 1px lightslategrey",
    backgroundColor: "white",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  chatBoxHeader: {
    cursor: "pointer",
    boxShadow: "0px 1px 2px 0px #00000059",
    padding: "3px 0",
  },
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
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
        <Collapse in={isExpanded}>
          {friends.length > 0 ? (
            <List>
              {friends.map((friend, index) => (
                <ListItem key={friend.name} button>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={friend.image} alt="" className={classes.img} />
                    </Avatar>
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
