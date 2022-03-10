import Grid from "@mui/material/Grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import postsActionTypes from "../../redux/actionTypes/postsActionTypes";
import { postsSelector } from "../../redux/selectors";
import Post from "../post/Post";
import PlaceholderPost from "./ui/PlaceholderPost";

const PostPopup = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const post = useSelector(postsSelector)[postId];

  if (!post) {
    dispatch({ type: postsActionTypes.FEED_DATA_FETCH_REQUEST });
  }

  return (
    <Grid container justifyContent="center">
      <Grid item container xs={5}>
        {post ? <Post post={post} /> : <PlaceholderPost />}
        {/* SHUOLD MAKE HERE SOMEWHERE CLICK ON IMAGE = POPUP */}
      </Grid>
    </Grid>
  );
};

export default PostPopup;
