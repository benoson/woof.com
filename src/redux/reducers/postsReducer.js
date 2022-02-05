import postsActionTypes from "../actionTypes/postsActionTypes";

const defaultState = {
  feedPosts: [],
};

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case postsActionTypes.FEED_DATA_FETCH_SUCCESS:
      return { ...state, feedPosts: action.payload };

    default:
      return state;
  }
};

export default postsReducer;
