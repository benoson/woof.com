import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import ReactionsSection from "./ReactionsSection";
import CommentsSection from "./CommentsSection";

const styles = makeStyles({
  sectionContainer: {
    padding: "10px 0",
  },
});

const PostBottomSection = ({ reactions, comments }) => {
  const classes = styles();

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="space-between"
      alignItems="center"
      className={classes.sectionContainer}
    >
      <ReactionsSection reactions={reactions} />
      <CommentsSection comments={comments} />
    </Grid>
  );
};

export default PostBottomSection;
