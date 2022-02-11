import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Post from "../components/post/Post";
import { useDispatch, useSelector } from "react-redux";
import postsActionTypes from "../redux/actionTypes/postsActionTypes";
import { postsSelector } from "../redux/selectors";

const styles = makeStyles({
  container: {
    padding: "35px 0",
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
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      rowGap={6}
      className={classes.container}
    >
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Grid>
  );
};

export default Feed;
