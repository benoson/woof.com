import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import ReactionsSection from "./ReactionsSection";
import CommentsSection from "./CommentsSection";
import { useDispatch } from "react-redux";
import postsActionTypes from "../../redux/actionTypes/postsActionTypes";

const styles = makeStyles({
  sectionContainer: {
    padding: "10px 0",
  },
});

const PostBottomSection = ({ postId, reactions, comments }) => {
  const classes = styles();
  const dispatch = useDispatch();

  const [reaction, setReaction] = useState("");

  useEffect(() => {
    if (reaction.trim() !== "") {
      dispatch({
        type: postsActionTypes.UPDATE_POST_REQUEST,
        payload: {
          postId,
          data: { reaction },
        },
      });
    }
  }, [reaction]);

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="space-between"
      alignItems="center"
      className={classes.sectionContainer}
    >
      <ReactionsSection reactions={reactions} setReaction={setReaction} />
      <CommentsSection comments={comments} />
    </Grid>
  );
};

export default PostBottomSection;
