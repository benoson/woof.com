import { combineReducers } from "redux";
import appReducer from "./appReducer";
import postsReducer from "./postsReducer";
import userReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer,
  app: appReducer,
  user: userReducer,
});
