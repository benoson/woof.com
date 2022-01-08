import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  authorImg: {
    borderRadius: "50%",
    width: "48px",
  },
  postImage: {
    height: "100%",
  },
  postImageContainer: {
    height: "100%",
    maxHeight: "350px",
    border: "1px solid lightslategrey",
    borderRadius: "15px",
  },
});

const Post = (params) => {
  const classes = styles();

  const {
    id,
    authorName,
    timePosted,
    authorImg,
    likes,
    disLikes,
    comments,
    postContent,
  } = params.post;

  return (
    <Grid container item xs={5}>
      {/* TOP */}
      <Grid
        container
        item
        xs={12}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* TOP LEFT */}
        <Grid container item xs={6} alignItems="center" spacing={1}>
          <Grid item>
            <img src={authorImg} alt="" className={classes.authorImg} />
          </Grid>
          <Grid item>{authorName}</Grid>
          <Grid item>*</Grid>
          <Grid item>{timePosted}</Grid>
        </Grid>

        {/* TOP RIGHT */}
        <Grid container item xs={6} justifyContent="flex-end">
          :
        </Grid>
      </Grid>

      {/* Second ROW */}
      <Grid
        container
        item
        xs={12}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>{postContent.title}</Grid>
      </Grid>

      {/* Post BOX */}
      <Grid
        container
        item
        xs={12}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} className={classes.postImageContainer}>
          <img src={authorImg} alt="" className={classes.postImage} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Post;
