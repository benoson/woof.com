import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Post from "./Post";
import PlaceholderPost from "../common/ui/PlaceholderPost";

const styles = makeStyles({});

const PostsSection = ({ posts }) => {
  const classes = styles();
  const postsArr = Object.values(posts);

  return (
    <Grid container item justifyContent="center" alignItems="center" flexDirection="column">
      <Grid item container xs={4} rowGap={6}>
        {postsArr.length > 0 ? (
          postsArr.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <>
            <PlaceholderPost />
            <PlaceholderPost />
            <PlaceholderPost />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default PostsSection;
