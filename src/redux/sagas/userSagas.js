import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import * as userService from "../../services/userService";
import usersActionTypes from "../actionTypes/usersActionTypes";

function* register(action) {
  try {
    const { userName, profileImage, password, confirmPassword, navigate } =
      action.payload;
    const userRegisterDataFromServer = yield call(
      userService.register,
      userName,
      profileImage,
      password,
      confirmPassword
    );
    yield put({
      type: usersActionTypes.REGISTER_SUCCESS,
      payload: {
        userRegisterDataFromServer,
      },
    });

    toast.success("🤡 Nice to have you!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    navigate("/");
  } catch (error) {
    yield put({ type: usersActionTypes.REGISTER_FAIL, payload: error });
  }
}

export function* registerListener() {
  yield takeLatest(usersActionTypes.REGISTER_REQUEST, register);
}

function* login(action) {
  try {
    const { userName, password, navigate } = action.payload;
    const userLoginDataFromServer = yield call(
      userService.login,
      userName,
      password
    );

    yield put({
      type: usersActionTypes.LOGIN_SUCCESS,
      payload: {
        userLoginDataFromServer,
      },
    });

    toast.success("🤖 Welcome back!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    navigate("/");
  } catch (error) {
    yield put({ type: usersActionTypes.LOGIN_FAIL, payload: error });
    toast.error("🤔 Can't find that user", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export function* loginListener() {
  yield takeLatest(usersActionTypes.LOGIN_REQUEST, login);
}

function* addFriend(action) {
  try {
    const { userName } = action.payload;
    const friend = yield call(userService.addFriend, userName);

    yield put({
      type: usersActionTypes.ADD_FRIEND_SUCCESS,
      payload: {
        friend,
      },
    });

    toast.success("🧜‍♂️ Friend request sent!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield put({ type: usersActionTypes.ADD_FRIEND_FAIL, payload: error });
    toast.error("🤔 Can't find that user", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export function* addFriendListener() {
  yield takeLatest(usersActionTypes.ADD_FRIEND_REQUEST, addFriend);
}

function* getUserData(action) {
  try {
    const userData = yield call(userService.getUserData);
    yield put({
      type: usersActionTypes.USER_DATA_SUCCESS,
      payload: {
        userData,
      },
    });
  } catch (error) {
    yield put({ type: usersActionTypes.USER_DATA_FAIL, payload: error });
  }
}

export function* getUserDataListener() {
  yield takeLatest(usersActionTypes.USER_DATA_REQUEST, getUserData);
}
