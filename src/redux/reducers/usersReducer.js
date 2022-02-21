import usersActionTypes from "../actionTypes/usersActionTypes";

const defaultState = {
  userData: {
    isLogged: false,
    userName: "",
    profileImage: "",
  },
  error: null,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case usersActionTypes.REGISTER_SUCCESS:
      const { userName, profileImage } = action.payload;
      return {
        ...state,
        userData: { ...state.userData, isLogged: true, userName, profileImage },
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;
