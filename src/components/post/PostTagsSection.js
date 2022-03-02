import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Chip } from "@mui/material";

const styles = makeStyles({
  sectionContainer: {
    paddingBottom: "10px",
  },
  chip: {
    marginRight: "10px",
  },
});

const PostTagsSection = ({ tags }) => {
  const classes = styles();

  return (
    <Grid
      container
      item
      xs={12}
      alignItems="center"
      className={classes.sectionContainer}
    >
      {tags?.map((tag, index) => (
        <Grid item key={index}>
          <Chip className={classes.chip} label={tag} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostTagsSection;
