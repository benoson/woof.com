import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Chip } from "@mui/material";
import { useDispatch } from "react-redux";
import postsActionTypes from "../../redux/actionTypes/postsActionTypes";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onTagClick = (tag) => {
    dispatch({ type: postsActionTypes.FILTER_POSTS, payload: { tag, navigate } });
  };

  return (
    <Grid container item xs={12} alignItems="center" className={classes.sectionContainer}>
      {tags?.map((tag, index) => (
        <Grid item key={index}>
          <Chip
            className={classes.chip}
            label={tag}
            onClick={() => {
              onTagClick(tag);
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostTagsSection;
