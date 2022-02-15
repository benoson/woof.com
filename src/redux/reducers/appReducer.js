import appActionTypes from "../actionTypes/appActionTypes";

const defaultState = {
  isShowUploadSection: false,
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case appActionTypes.DISPLAY_UPLOAD_SECTION:
      return { ...state, isShowUploadSection: true };

    case appActionTypes.HIDE_UPLOAD_SECTION:
      return { ...state, isShowUploadSection: false };

    default:
      return state;
  }
};

export default appReducer;
