import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Popover from "@mui/material/Popover";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import moreIcon from "../../assets/svgs/more_icon.svg";
import postsActionTypes from "../../redux/actionTypes/postsActionTypes";
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
  clickable: {
    cursor: "pointer",
  },
});

const PostHeader = ({ authorImg, authorName, timeOfCreation, postId }) => {
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userFromState = useSelector(userSelector);
  const [anchorEl, setAnchorEl] = useState(null);

  const onUserClick = () => {
    navigate(`/profile/${authorName}`);
  };

  const assignAnchorElement = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const unAssignAnchorElement = () => {
    setAnchorEl(null);
  };

  const onCopyLinkButtonClick = () => {
    const postLink = `/localhost:3000/post/${postId}`;
    navigator.clipboard.writeText(postLink);
    unAssignAnchorElement();
    toast.success("🦄 Copied!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onDeletePostClick = () => {
    dispatch({
      type: postsActionTypes.DELETE_POST_REQUEST,
      payload: { postId },
    });
  };

  const isPopoverOpen = Boolean(anchorEl);

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid
        container
        item
        xs={6}
        alignItems="center"
        spacing={1}
        onClick={onUserClick}
        className={classes.clickable}
      >
        <Grid item>
          <img src={authorImg} alt="" className={classes.authorImg} />
        </Grid>
        <Grid item>
          {authorName}, {timeOfCreation}
        </Grid>
      </Grid>

      <Grid container item xs={6} justifyContent="flex-end">
        <img
          alt=""
          src={moreIcon}
          className={classes.moreIcon}
          onClick={assignAnchorElement}
        />
        <Popover
          open={isPopoverOpen}
          anchorEl={anchorEl}
          onClose={unAssignAnchorElement}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <List>
            <ListItem button onClick={onCopyLinkButtonClick}>
              Copy link
            </ListItem>

            {userFromState.userName === authorName && (
              <ListItem
                button
                className={classes.redText}
                onClick={onDeletePostClick}
              >
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
