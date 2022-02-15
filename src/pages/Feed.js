import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import postsActionTypes from "../redux/actionTypes/postsActionTypes";
import { postsSelector } from "../redux/selectors";
import PostsSection from "../components/post/PostsSection";

const styles = makeStyles({
  container: {
    padding: "20px 0px",
  },
});

const Feed = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispatch({ type: postsActionTypes.FEED_DATA_FETCH_REQUEST });
  }, []);

  return (
    <Grid container className={classes.container}>
      <Grid container item xs={12} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <PostsSection posts={posts} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Feed;
