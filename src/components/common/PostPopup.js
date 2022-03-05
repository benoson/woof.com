import Grid from "@mui/material/Grid";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postsSelector } from "../../redux/selectors";
import Post from "../post/Post";

const PostPopup = () => {
  const { postId } = useParams();
  const post = useSelector(postsSelector)[postId];

  return (
    <Grid container justifyContent="center">
      <Grid item container xs={4}>
        <Post post={post} />
      </Grid>
    </Grid>
  );
};

export default PostPopup;
