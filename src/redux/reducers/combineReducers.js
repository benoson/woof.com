import { combineReducers } from "redux";
import appReducer from "./appReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
  posts: postsReducer,
  app: appReducer,
});
