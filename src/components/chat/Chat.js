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
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { friendsSelector } from "../../redux/selectors";

const styles = makeStyles({
  container: {
    width: "250px",
    position: "fixed",
    bottom: 0,
    left: "100px",
    boxShadow: "0px 0px 3px 1px lightslategrey",
    backgroundColor: "white",
    padding: "3px",
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
    <Grid container item onClick={onChatBoxClick} className={classes.container}>
      <Grid item>
        <Typography>Friends</Typography>
      </Grid>

      <Grid item container>
        <Collapse in={isExpanded}>
          {friends.length > 0 ? (
            <List>
              {friends.map((friend, index) => (
                <>
                  <ListItem key={friend.name}>
                    <ListItemAvatar>
                      <Avatar>
                        <img
                          src={friend.image}
                          alt=""
                          className={classes.img}
                        />
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText>{friend.name}</ListItemText>
                  </ListItem>

                  {index !== friends.length - 1 && <Divider />}
                </>
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
