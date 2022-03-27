import { combineReducers } from "redux";
import appReducer from "./appReducer";
import postsReducer from "./postsReducer";
import preferencesReducer from "./preferencesReducer";
import userReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer,
  app: appReducer,
  user: userReducer,
  preferences: preferencesReducer,
});
