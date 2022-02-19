import usersActionTypes from "../actionTypes/usersActionTypes";

const defaultState = {
  user: {
    isLogged: false,
    userName: "",
    profileImage: "",
  },
  error: null,
};

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case usersActionTypes.REGISTER_SUCCESS:
      const { userName, profileImage } = action.payload;
      return {
        ...state,
        user: { ...state.user, isLogged: true, userName, profileImage },
        error: null,
      };

    default:
      return state;
  }
};

export default postsReducer;