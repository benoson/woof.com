import React from "react";
import Grid from "@mui/material/Grid";
import PostHeader from "./PostHeader";
import PostSubHeader from "./PostSubHeader";
import PostContent from "./PostContent";
import PostBottomSection from "./PostBottomSection";

const Post = ({ post }) => {
  const { id, title, timeOfCreation, author, reactions, comments, image } =
    post;

  return (
    <Grid container item xs={12}>
      <PostHeader
        authorImg={author.image}
        authorName={author.name}
        timeOfCreation={timeOfCreation}
      />

      <PostSubHeader title={title} />

      <PostContent image={image} />

      <PostBottomSection reactions={reactions} comments={comments} />
    </Grid>
  );
};

export default Post;
