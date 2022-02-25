import usersActionTypes from "../actionTypes/usersActionTypes";
import axios from "axios";

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
      const { userRegisterDataFromServer } = action.payload;
      handleTokenFromServer(userRegisterDataFromServer.token);
      return {
        ...state,
        userData: {
          ...state.userData,
          isLogged: true,
          userName: userRegisterDataFromServer.user.userName,
          profileImage: userRegisterDataFromServer.user.image,
        },
        error: null,
      };

    case usersActionTypes.LOGIN_SUCCESS:
      const { userLoginDataFromServer } = action.payload;
      handleTokenFromServer(userLoginDataFromServer.token);
      return {
        ...state,
        userData: {
          ...state.userData,
          isLogged: true,
          userName: userLoginDataFromServer.user.userName,
          profileImage: userLoginDataFromServer.user.image,
        },
        error: null,
      };

    case usersActionTypes.AUTH_CHECK:
      return {
        ...state,
        userData: { ...state.userData, isLogged: action.payload },
      };

    default:
      return state;
  }
};

// PUT THIS IN A NEW ACTIONS FILE
const handleTokenFromServer = (token) => {
  localStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default userReducer;
