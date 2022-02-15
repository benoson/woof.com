import React from "react";
import Grid from "@mui/material/Grid";
import PostHeader from "./PostHeader";
import PostSubHeader from "./PostSubHeader";
import PostContent from "./PostContent";
import PostBottomSection from "./PostBottomSection";

const Post = ({ post }) => {
  const {
    id,
    authorName,
    title,
    timeOfCreation,
    authorImg,
    reactions,
    comments,
    content,
  } = post;

  return (
    <Grid container item xs={12}>
      <PostHeader
        authorImg={authorImg}
        authorName={authorName}
        timeOfCreation={timeOfCreation}
      />

      <PostSubHeader title={title} />

      <PostContent content={content} />

      <PostBottomSection reactions={reactions} comments={comments} />
    </Grid>
  );
};

export default Post;
