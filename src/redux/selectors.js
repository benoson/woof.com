export const postsSelector = (state) => {
  return state.posts.feedPosts;
};

export const shouldDisplayUploadSectionSelector = (state) => {
  return state.app.isShowUploadSection;
};
