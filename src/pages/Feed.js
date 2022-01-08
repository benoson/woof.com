import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Post from "../components/Post";
import ben from "../assets/images/ben_with_guitar.jpg";

const styles = makeStyles({
  container: {
    padding: "35px 0",
  },
});

const Feed = () => {
  const classes = styles();

  const posts = [
    {
      id: 0,
      authorName: "Chris Hemsworth",
      timePosted: "2h",
      authorImg: ben,
      likes: 14,
      disLikes: 1,
      comments: 3,
      postContent: {
        title: "I find this meme funny",
        img: "",
        textContent: "",
      },
    },
  ];

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      className={classes.container}
    >
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Grid>
  );
};

export default Feed;
