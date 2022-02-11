import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  postImage: {
    height: "100%",
  },
  postImageContainer: {
    height: "100%",
    maxHeight: "350px",
    border: "1px solid lightslategrey",
    borderRadius: "5px",
  },
});

const PostContent = ({ content }) => {
  const classes = styles();

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item xs={12} className={classes.postImageContainer}>
        <img src={content.img} alt="" className={classes.postImage} />
      </Grid>
    </Grid>
  );
};

export default PostContent;
