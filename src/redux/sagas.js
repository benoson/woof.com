import { all, call, put, takeLatest } from "redux-saga/effects";
import * as postService from "../services/postService";
import * as userService from "../services/userService";
import postsActionTypes from "./actionTypes/postsActionTypes";
import usersActionTypes from "./actionTypes/usersActionTypes";
import { push } from "react-router-redux";

function* getFeedData(action) {
  try {
    const feedData = yield call(postService.getFeedData);
    yield put({
      type: postsActionTypes.FEED_DATA_FETCH_SUCCESS,
      payload: feedData.data,
    });
  } catch (error) {
    yield put({ type: postsActionTypes.FEED_DATA_FETCH_FAIL, payload: error });
  }
}

function* getFeedDataListener() {
  yield takeLatest(postsActionTypes.FEED_DATA_FETCH_REQUEST, getFeedData);
}

function* addPost(action) {
  try {
    const { title, image } = action.payload;
    const postAdded = yield call(postService.addPost, title, image);
    yield put({
      type: postsActionTypes.ADD_POST_SUCCESS,
      payload: postAdded.data,
    });
  } catch (error) {
    yield put({ type: postsActionTypes.ADD_POST_FAIL, payload: error });
  }
}

function* addPostListener() {
  yield takeLatest(postsActionTypes.ADD_POST_REQUEST, addPost);
}

function* register(action) {
  try {
    const { userName, profileImage, password, confirmPassword } =
      action.payload;
    yield call(
      userService.register,
      userName,
      profileImage,
      password,
      confirmPassword
    );
    yield put({
      type: usersActionTypes.REGISTER_SUCCESS,
      payload: {
        userName,
        profileImage,
      },
    });
    yield put(push("/home")); // THIS LINE NEEDS TO BE CHECKED, IT DOESN'T WORK
  } catch (error) {
    yield put({ type: usersActionTypes.REGISTER_FAIL, payload: error });
  }
}

function* registerListener() {
  yield takeLatest(usersActionTypes.REGISTER_REQUEST, register);
}

export default function* postSagas() {
  yield all([getFeedDataListener(), addPostListener(), registerListener()]);
}
