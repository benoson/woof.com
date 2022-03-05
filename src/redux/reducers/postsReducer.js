import postsActionTypes from "../actionTypes/postsActionTypes";
import moment from "moment";

const defaultState = {
  feedPosts: {},
  error: null,
};

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case postsActionTypes.FEED_DATA_FETCH_SUCCESS:
      const allPosts = action.payload;
      const newPostsState = { ...state.feedPosts };

      allPosts.map((post) => {
        post.timeOfCreation = moment(new Date(post.timeOfCreation)).startOf("hour").fromNow();

        newPostsState[post._id] = post;
      });

      return { ...state, feedPosts: newPostsState, error: null };

    case postsActionTypes.FEED_DATA_FETCH_FAIL:
      return { ...state, error: action.payload };

    case postsActionTypes.ADD_POST_SUCCESS:
      const addedPost = action.payload;
      addedPost.timeOfCreation = moment(new Date(addedPost.timeOfCreation)).startOf("hour").fromNow();

      const postsUpdated = Object.assign({ [addedPost._id]: addedPost }, { ...state.feedPosts });

      return {
        ...state,
        feedPosts: postsUpdated,
        error: null,
      };

    case postsActionTypes.UPDATE_POST_SUCCESS:
      const updatedPost = action.payload;
      updatedPost.timeOfCreation = moment(new Date(updatedPost.timeOfCreation)).startOf("hour").fromNow();

      const allPostsUpdated = { ...state.feedPosts };
      allPostsUpdated[updatedPost._id] = updatedPost;

      return {
        ...state,
        feedPosts: allPostsUpdated,
        error: null,
      };

    case postsActionTypes.DELETE_POST_SUCCESS:
      const deletedPost = action.payload;
      const allPostsAfterDeletion = { ...state.feedPosts };
      delete allPostsAfterDeletion[deletedPost._id];

      return {
        ...state,
        feedPosts: allPostsAfterDeletion,
        error: null,
      };

    default:
      return state;
  }
};

export default postsReducer;
