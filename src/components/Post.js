import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import commentIcon from "../assets/svgs/comment_icon.svg";
import moreIcon from "../assets/svgs/more_icon.svg";
import Typography from "@mui/material/Typography";
import thumbUp from "../assets/svgs/thumb_up.svg";
import thumbDown from "../assets/svgs/thumb_down.svg";

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
    borderRadius: "5px",
  },
  underBox: {
    padding: "10px 0",
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
          <img alt="" src={moreIcon} />
        </Grid>
      </Grid>

      {/* Second ROW */}
      <Grid
        container
        item
        xs={12}
        justifyContent="flex-start"
        alignItems="center"
        mt={1}
      >
        <Typography variant="subtitle1" component="div" gutterBottom>
          {postContent.title}
        </Typography>
      </Grid>

      {/* Post BOX */}
      {postContent && (
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
      )}

      <Grid item container xs={6} spacing={2} className={classes.underBox}>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<img alt="" src={thumbUp} />}
            disableRipple
          >
            {likes}
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<img alt="" src={thumbDown} />}
            disableRipple
          >
            {disLikes}
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<img alt="" src={commentIcon} />}
            disableRipple
          >
            {comments}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Post;
