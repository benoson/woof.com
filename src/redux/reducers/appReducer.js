import appActionTypes from "../actionTypes/appActionTypes";

const defaultState = {
  isShowUploadSection: false,
  isShowPostPopupSection: false,
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case appActionTypes.DISPLAY_UPLOAD_SECTION:
      return { ...state, isShowUploadSection: true };

    case appActionTypes.HIDE_UPLOAD_SECTION:
      return { ...state, isShowUploadSection: false };

    case appActionTypes.DISPLAY_POST_POPUP_SECTION:
      return { ...state, isShowPostPopupSection: true };

    case appActionTypes.HIDE_POST_POPUP_SECTION:
      return { ...state, isShowPostPopupSection: false };

    default:
      return state;
  }
};

export default appReducer;
