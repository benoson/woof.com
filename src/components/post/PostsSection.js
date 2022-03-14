import React from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import postsActionTypes from "../../redux/actionTypes/postsActionTypes";
import PlaceholderPost from "../common/ui/PlaceholderPost";
import { filteredKeywordSelector } from "../../redux/selectors";
import Post from "./Post";

const styles = makeStyles({
  showingFilteredResultsHeader: {
    textAlign: "left",
    padding: "10px 5px",
    borderRadius: "5px",
  },
});

const PostsSection = ({ posts, sectionSize = 4 }) => {
  const classes = styles();
  const dispatch = useDispatch();

  const filteredKeyword = useSelector(filteredKeywordSelector);

  const postsArr = Object.values(posts);

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
            xs={sectionSize}
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
        <Grid item container xs={sectionSize} rowGap={6}>
          {postsArr.length > 0 ? (
            postsArr.map((post) => <Post key={post._id} post={post} />)
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
