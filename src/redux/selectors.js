export const postsSelector = (state) => {
  return state.posts.feedPosts;
};

export const filteredKeywordSelector = (state) => {
  return state.posts.filteredKeyword;
};

export const shouldDisplayUploadSectionSelector = (state) => {
  return state.app.isShowUploadSection;
};

export const shouldDisplayPostPopupSectionSelector = (state) => {
  return state.app.isShowPostPopupSection;
};

export const userSelector = (state) => {
  return state.user.userData;
};

export const friendsSelector = (state) => {
  return state.user.userData.friends;
};

export const userLoadingSelector = (state) => {
  return state.user.loading;
};

export const preferencesSelector = (state) => {
  return state.preferences.preferences;
};
