import React from "react";
import Grid from "@mui/material/Grid";
import PostHeader from "./PostHeader";
import PostSubHeader from "./PostSubHeader";
import PostContent from "./PostContent";
import PostBottomSection from "./PostBottomSection";
import PostTagsSection from "./PostTagsSection";
import { useSelector } from "react-redux";
import { postsSelector } from "../../redux/selectors";

const Post = ({ post }) => {
  const { _id, title, timeOfCreation, author, image, tags } = post;

  const postSelector = useSelector(postsSelector)[_id];

  return (
    <Grid container item xs={12}>
      <PostHeader
        authorImg={author.image}
        authorName={author.name}
        timeOfCreation={timeOfCreation}
      />

      <PostSubHeader title={title} />

      <PostTagsSection tags={tags} />

      <PostContent image={image} />

      <PostBottomSection
        reactions={postSelector.reactions}
        comments={postSelector.comments}
        postId={_id}
      />
    </Grid>
  );
};

export default Post;
