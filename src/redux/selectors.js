export const postsSelector = (state) => {
  return state.posts.feedPosts;
};

export const shouldDisplayUploadSectionSelector = (state) => {
  return state.app.isShowUploadSection;
};

export const userSelector = (state) => {
  return state.user.userData;
};

export const userLoadingSelector = (state) => {
  return state.user.loading;
};
