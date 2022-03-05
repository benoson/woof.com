import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Post from "./Post";

const styles = makeStyles({});

const PostsSection = ({ posts }) => {
  const classes = styles();

  return (
    <Grid
      container
      item
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Grid item container xs={4} rowGap={6}>
        {Object.values(posts).map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </Grid>
    </Grid>
  );
};

export default PostsSection;
