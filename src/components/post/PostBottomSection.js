import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import commentIcon from "../../assets/svgs/comment_icon.svg";
import thumbUp from "../../assets/svgs/thumb_up.svg";
import thumbDown from "../../assets/svgs/thumb_down.svg";

const styles = makeStyles({
  underBox: {
    padding: "10px 0",
  },
});

const PostBottomSection = ({ likes, disLikes, comments }) => {
  const classes = styles();

  return (
    <Grid item container xs={6} spacing={2} className={classes.underBox}>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<img alt="" src={thumbUp} />}
          disableRipple
        >
          {likes.length}
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<img alt="" src={thumbDown} />}
          disableRipple
        >
          {disLikes.length}
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<img alt="" src={commentIcon} />}
          disableRipple
        >
          {comments.length}
        </Button>
      </Grid>
    </Grid>
  );
};

export default PostBottomSection;
