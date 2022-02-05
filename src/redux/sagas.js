import { call, put, takeLatest } from "redux-saga/effects";
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

export default getFeedDataListener;
