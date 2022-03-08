import React from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import postsActionTypes from "../../redux/actionTypes/postsActionTypes";
import PlaceholderPost from "../common/ui/PlaceholderPost";
import Post from "./Post";

const styles = makeStyles({
  showingFilteredResultsHeader: {
    textAlign: "left",
    boxShadow: "0px 0px 10px 5px #00000033",
    padding: "10px 5px",
    borderRadius: "5px",
  },
});

const PostsSection = ({ posts, filteredPosts, filteredKeyword }) => {
  const classes = styles();
  const dispatch = useDispatch();

  const postsArr = Object.values(posts);
  const filteredPostsArr = Object.values(filteredPosts);

  const postsToShow =
    filteredKeyword && filteredPostsArr.length > 0
      ? filteredPostsArr
      : postsArr;

  const onFilteredKeywordClick = () => {
    dispatch({ type: postsActionTypes.CLEAR_FILTERED_POSTS });
  };

  return (
    <Grid container item spacing={4}>
      {filteredKeyword && (
        <Grid container item justifyContent="center">
          <Grid
            item
            container
            xs={4}
            spacing={1}
            direction="column"
            className={classes.showingFilteredResultsHeader}
          >
            <Grid item>
              <Typography>Showing filtered results:</Typography>
            </Grid>

            <Grid item>
              <Chip label={filteredKeyword} onDelete={onFilteredKeywordClick} />
            </Grid>
          </Grid>
        </Grid>
      )}

      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item container xs={4} rowGap={6}>
          {postsToShow.length > 0 ? (
            postsToShow.map((post) => <Post key={post._id} post={post} />)
          ) : (
            <>
              <PlaceholderPost />
              <PlaceholderPost />
              <PlaceholderPost />
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PostsSection;
