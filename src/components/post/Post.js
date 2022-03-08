import React from "react";
import Grid from "@mui/material/Grid";
import PostHeader from "./PostHeader";
import PostSubHeader from "./PostSubHeader";
import PostContent from "./PostContent";
import PostBottomSection from "./PostBottomSection";
import PostTagsSection from "./PostTagsSection";

const Post = ({ post }) => {
  const {
    _id,
    title,
    timeOfCreation,
    author,
    image,
    tags,
    reactions,
    comments,
  } = post;

  return (
    <Grid container item xs={12}>
      <PostHeader
        authorImg={author.image}
        authorName={author.name}
        timeOfCreation={timeOfCreation}
        postId={_id}
      />
      <PostSubHeader title={title} />
      <PostTagsSection tags={tags} />
      <PostContent image={image} postId={_id} />
      <PostBottomSection
        reactions={reactions}
        comments={comments}
        postId={_id}
      />
    </Grid>
  );
};

export default Post;
