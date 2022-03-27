import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import * as postService from "../../services/postService";
import appActionTypes from "../actionTypes/appActionTypes";
import postsActionTypes from "../actionTypes/postsActionTypes";
import usersActionTypes from "../actionTypes/usersActionTypes";

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

export function* getFeedDataListener() {
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

export function* addPostListener() {
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

export function* addReactionListener() {
  yield takeLatest(postsActionTypes.UPDATE_POST_REQUEST, updatePost);
}

function* deletePost(action) {
  try {
    const { postId } = action.payload;
    const postUpdated = yield call(postService.deletePost, postId);
    yield put({
      type: postsActionTypes.DELETE_POST_SUCCESS,
      payload: postUpdated.data,
    });

    toast.success("Deleted post", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  } catch (error) {
    yield put({ type: postsActionTypes.DELETE_POST_FAIL, payload: error });
  }
}

export function* deletePostListener() {
  yield takeLatest(postsActionTypes.DELETE_POST_REQUEST, deletePost);
}
