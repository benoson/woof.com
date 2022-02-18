import postsActionTypes from "../actionTypes/postsActionTypes";

const defaultState = {
  feedPosts: [],
  error: null,
};

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case postsActionTypes.FEED_DATA_FETCH_SUCCESS:
      return { ...state, feedPosts: action.payload, error: null };

    case postsActionTypes.FEED_DATA_FETCH_FAIL:
      return { ...state, error: action.payload };

    case postsActionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        feedPosts: [...state.feedPosts, action.payload],
        error: null,
      };

    default:
      return state;
  }
};

export default postsReducer;
