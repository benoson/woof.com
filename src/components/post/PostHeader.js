import React from "react";
import Grid from "@mui/material/Grid";
import moreIcon from "../../assets/svgs/more_icon.svg";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  authorImg: {
    borderRadius: "50%",
    objectFit: "cover",
    width: "44px",
    height: "44px",
  },
});

const PostHeader = ({ authorImg, authorName, timeOfCreation }) => {
  const classes = styles();

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid container item xs={6} alignItems="center" spacing={1}>
        <Grid item>
          <img src={authorImg} alt="" className={classes.authorImg} />
        </Grid>
        <Grid item>{authorName}</Grid>
        <Grid item>*</Grid>
        <Grid item>{timeOfCreation}</Grid>
      </Grid>

      <Grid container item xs={6} justifyContent="flex-end">
        <img alt="" src={moreIcon} />
      </Grid>
    </Grid>
  );
};

export default PostHeader;
