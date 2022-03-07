import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PostPopup from "../components/common/PostPopup";
import PostsSection from "../components/post/PostsSection";
import postsActionTypes from "../redux/actionTypes/postsActionTypes";
import {
  filteredKeywordSelector,
  filteredPostsSelector,
  postsSelector,
} from "../redux/selectors";

const styles = makeStyles({
  container: {
    padding: "20px 0px",
  },
});

const Feed = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);
  const filteredPosts = useSelector(filteredPostsSelector);
  const filteredKeyword = useSelector(filteredKeywordSelector);

  useEffect(() => {
    dispatch({ type: postsActionTypes.FEED_DATA_FETCH_REQUEST });
  }, []);

  return (
    <Grid container className={classes.container}>
      <Grid container item xs={12} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PostsSection
                  posts={posts}
                  filteredPosts={filteredPosts}
                  filteredKeyword={filteredKeyword}
                />
              }
            />
            <Route exact path="/post/:postId" element={<PostPopup />} />
          </Routes>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Feed;
