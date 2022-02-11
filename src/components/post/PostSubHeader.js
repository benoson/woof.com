import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const PostSubHeader = ({ title }) => {
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="flex-start"
      alignItems="center"
      mt={1}
    >
      <Typography variant="subtitle1" component="div" gutterBottom>
        {title}
      </Typography>
    </Grid>
  );
};

export default PostSubHeader;
