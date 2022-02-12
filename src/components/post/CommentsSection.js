import React from "react";
import commentIcon from "../../assets/svgs/comment_icon.svg";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const CommentsSection = ({ comments }) => {
  return (
    <Grid container item xs={2}>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<img alt="" src={commentIcon} />}
        disableRipple
      >
        {comments.length}
      </Button>
    </Grid>
  );
};

export default CommentsSection;
