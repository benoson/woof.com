import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import moreIcon from "../../assets/svgs/more_icon.svg";
import { makeStyles } from "@mui/styles";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";

const styles = makeStyles({
  authorImg: {
    borderRadius: "50%",
    objectFit: "cover",
    width: "44px",
    height: "44px",
  },
  moreIcon: {
    cursor: "pointer",
    transition: "0.1s ease",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#7788993b",
    },
  },
  redText: {
    color: "rgb(244, 67, 54)",
  },
});

const PostHeader = ({ authorImg, authorName, timeOfCreation }) => {
  const classes = styles();

  const userFromState = useSelector(userSelector);

  const [anchorEl, setAnchorEl] = useState(null);

  const assignAnchorElement = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const unAssignAnchorElement = () => {
    setAnchorEl(null);
  };

  const isPopoverOpen = Boolean(anchorEl);

  return (
    <Grid container item xs={12} justifyContent="space-between" alignItems="center">
      <Grid container item xs={6} alignItems="center" spacing={1}>
        <Grid item>
          <img src={authorImg} alt="" className={classes.authorImg} />
        </Grid>
        <Grid item>
          {authorName}, {timeOfCreation}
        </Grid>
      </Grid>

      <Grid container item xs={6} justifyContent="flex-end">
        <img alt="" src={moreIcon} className={classes.moreIcon} onClick={assignAnchorElement} />
        <Popover
          open={isPopoverOpen}
          anchorEl={anchorEl}
          onClose={unAssignAnchorElement}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <List>
            <ListItem button>Copy link</ListItem>

            {userFromState.userName === authorName && (
              <ListItem button className={classes.redText}>
                Delete post
              </ListItem>
            )}
          </List>
        </Popover>
      </Grid>
    </Grid>
  );
};

export default PostHeader;
