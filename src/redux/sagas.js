import { all, call, put, takeLatest } from "redux-saga/effects";
import * as postService from "../services/postService";
import postsActionTypes from "./actionTypes/postsActionTypes";

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

export default function* postSagas() {
  yield all([getFeedDataListener(), addPostListener()]);
}
