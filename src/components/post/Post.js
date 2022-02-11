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
    timeOfCreation,
    authorImg,
    likes,
    disLikes,
    comments,
    content,
  } = post;

  return (
    <Grid container item xs={5}>
      <PostHeader
        authorImg={authorImg}
        authorName={authorName}
        timeOfCreation={timeOfCreation}
      />

      <PostSubHeader title={content.title} />

      <PostContent content={content} />

      <PostBottomSection
        likes={likes}
        disLikes={disLikes}
        comments={comments}
      />
    </Grid>
  );
};

export default Post;
