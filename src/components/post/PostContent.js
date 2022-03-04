import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const styles = makeStyles({
  postImage: {
    height: "100%",
  },
  postImageContainer: {
    height: "100%",
    maxHeight: "350px",
    boxShadow: "0px 0px 10px 0px #00000033",
    borderRadius: "5px",
  },
});

const PostContent = ({ postId, image }) => {
  const classes = styles();
  const navigate = useNavigate();

  const onPostContentClicked = () => {
    navigate(`/post/${postId}`);
  };

  return (
    <Grid container item xs={12} justifyContent="flex-start" alignItems="center" onClick={onPostContentClicked}>
      <Grid item xs={12} className={classes.postImageContainer}>
        <img src={image} alt="" className={classes.postImage} />
      </Grid>
    </Grid>
  );
};

export default PostContent;
