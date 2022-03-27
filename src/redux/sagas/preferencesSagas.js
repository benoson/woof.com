import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import * as preferencesService from "../../services/preferencesService";
import preferencesActionTypes from "../actionTypes/preferencesActionTypes";

function* updatePreferences(action) {
  try {
    const { preferences } = action.payload;

    const updatedPreferences = yield call(
      preferencesService.updatePreferences,
      preferences
    );

    yield put({
      type: preferencesActionTypes.UPDATE_PREFERENCES_SUCCESS,
      payload: {
        updatedPreferences,
      },
    });

    toast.success("Updated preferences", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  } catch (error) {
    yield put({
      type: preferencesActionTypes.UPDATE_PREFERENCES_FAIL,
      payload: error,
    });

    toast.error(`Couldn't update preferences, ${error}`, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  }
}

export function* updatePreferencesListener() {
  yield takeLatest(
    preferencesActionTypes.UPDATE_PREFERENCES_REQUEST,
    updatePreferences
  );
}
