import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Post from "./Post";
import PlaceholderPost from "../common/ui/PlaceholderPost";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { useDispatch } from "react-redux";
import postsActionTypes from "../../redux/actionTypes/postsActionTypes";

const styles = makeStyles({});

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
    <Grid
      container
      item
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {filteredKeyword && (
        <Grid>
          <Typography>Showing filtered results</Typography>
          <Chip label={{ filteredKeyword }} onClick={onFilteredKeywordClick} />
        </Grid>
      )}

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
  );
};

export default PostsSection;
