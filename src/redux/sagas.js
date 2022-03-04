import { all, call, put, takeLatest } from "redux-saga/effects";
import * as postService from "../services/postService";
import * as userService from "../services/userService";
import appActionTypes from "./actionTypes/appActionTypes";
import postsActionTypes from "./actionTypes/postsActionTypes";
import usersActionTypes from "./actionTypes/usersActionTypes";

function* getFeedData(action) {
  try {
    const feedData = yield call(postService.getFeedData);
    yield put({
      type: postsActionTypes.FEED_DATA_FETCH_SUCCESS,
      payload: feedData.data,
    });
  } catch (error) {
    console.error("Error fetching feed data:", error);
    if (error.response.status === 401) {
      yield put({ type: usersActionTypes.LOGOUT });
    }
    yield put({ type: postsActionTypes.FEED_DATA_FETCH_FAIL, payload: error });
  }
}

function* getFeedDataListener() {
  yield takeLatest(postsActionTypes.FEED_DATA_FETCH_REQUEST, getFeedData);
}

function* addPost(action) {
  try {
    const { title, image, tags } = action.payload;
    const postAdded = yield call(postService.addPost, title, image, tags);
    yield put({
      type: postsActionTypes.ADD_POST_SUCCESS,
      payload: postAdded.data,
    });
    yield put({
      type: appActionTypes.HIDE_UPLOAD_SECTION,
    });
  } catch (error) {
    yield put({ type: postsActionTypes.ADD_POST_FAIL, payload: error });
  }
}

function* addPostListener() {
  yield takeLatest(postsActionTypes.ADD_POST_REQUEST, addPost);
}

function* updatePost(action) {
  try {
    const { postId, data } = action.payload;
    const postUpdated = yield call(postService.updatePost, postId, data);
    yield put({
      type: postsActionTypes.UPDATE_POST_SUCCESS,
      payload: postUpdated.data,
    });
  } catch (error) {
    yield put({ type: postsActionTypes.UPDATE_POST_FAIL, payload: error });
  }
}

function* addReactionListener() {
  yield takeLatest(postsActionTypes.UPDATE_POST_REQUEST, updatePost);
}

function* register(action) {
  try {
    const { userName, profileImage, password, confirmPassword, navigate } = action.payload;
    const userRegisterDataFromServer = yield call(userService.register, userName, profileImage, password, confirmPassword);
    yield put({
      type: usersActionTypes.REGISTER_SUCCESS,
      payload: {
        userRegisterDataFromServer,
      },
    });
    navigate("/");
  } catch (error) {
    yield put({ type: usersActionTypes.REGISTER_FAIL, payload: error });
  }
}

function* registerListener() {
  yield takeLatest(usersActionTypes.REGISTER_REQUEST, register);
}

function* login(action) {
  try {
    const { userName, password, navigate } = action.payload;
    const userLoginDataFromServer = yield call(userService.login, userName, password);

    yield put({
      type: usersActionTypes.LOGIN_SUCCESS,
      payload: {
        userLoginDataFromServer,
      },
    });
    navigate("/");
  } catch (error) {
    yield put({ type: usersActionTypes.LOGIN_FAIL, payload: error });
  }
}

function* loginListener() {
  yield takeLatest(usersActionTypes.LOGIN_REQUEST, login);
}

export default function* sagas() {
  yield all([getFeedDataListener(), addPostListener(), addReactionListener(), registerListener(), loginListener()]);
}
