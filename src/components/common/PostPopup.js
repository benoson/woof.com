import React from "react";
import { useParams } from "react-router-dom";

const PostPopup = () => {
  const { postId } = useParams();
  return <div>PostPage</div>;
};

export default PostPopup;
