import preferencesActionTypes from "../actionTypes/preferencesActionTypes";

const defaultState = {
  preferences: {
    generalBackground: null,
    button: null,
    postBackground: null,
  },
  error: null,
  loading: false,
};

const preferencesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case preferencesActionTypes.UPDATE_PREFERENCES_SUCCESS:
      const { updatedPreferences } = action.payload;

      return {
        ...state,
        preferences: {
          ...state.preferences,
          updatedPreferences,
        },
        loading: false,
        error: false,
      };

    case preferencesActionTypes.UPDATE_PREFERENCES_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default preferencesReducer;
