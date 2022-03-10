import postsActionTypes from "../actionTypes/postsActionTypes";
import moment from "moment";

const defaultState = {
  feedPosts: {},
  filteredPosts: {},
  filteredKeyword: null,
  error: null,
};

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case postsActionTypes.FEED_DATA_FETCH_SUCCESS:
      const allPosts = action.payload;
      const newPostsState = {};

      allPosts.map((post) => {
        post.timeOfCreation = moment(new Date(post.timeOfCreation)).startOf("hour").fromNow();

        newPostsState[post._id] = post;
      });

      return {
        ...state,
        feedPosts: newPostsState,
        filteredPosts: defaultState.filteredPosts,
        error: null,
      };

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

    case postsActionTypes.FILTER_POSTS:
      const { tag, navigate } = action.payload;
      const filterTagLower = tag.toLowerCase();
      const preFilterPosts = { ...state.feedPosts };
      const filteredPosts = {};

      Object.values(preFilterPosts).map((post) => {
        if (post.tags.map((tag) => tag.toLowerCase()).includes(filterTagLower)) {
          filteredPosts[post._id] = post;
        }
      });

      navigate("/");

      return {
        ...state,
        filteredPosts: filteredPosts,
        filteredKeyword: filterTagLower,
      };

    case postsActionTypes.CLEAR_FILTERED_POSTS:
      return {
        ...state,
        filteredPosts: defaultState.filteredPosts,
        filteredKeyword: null,
      };

    default:
      return state;
  }
};

export default postsReducer;
