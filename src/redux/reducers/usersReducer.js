import usersActionTypes from "../actionTypes/usersActionTypes";
import { handleAuthResposeFromServer, handleLogout } from "../../components/common/logic/HandleAuth";

const defaultState = {
  userData: {
    userName: JSON.parse(localStorage.getItem("userData"))?.user?.name,
    profileImage: JSON.parse(localStorage.getItem("userData"))?.user?.image,
    isLogged: JSON.parse(localStorage.getItem("userData"))?.token,
  },
  error: null,
  loading: false,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case usersActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case usersActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case usersActionTypes.REGISTER_SUCCESS:
      const { userRegisterDataFromServer } = action.payload;
      handleAuthResposeFromServer(userRegisterDataFromServer);
      return {
        ...state,
        userData: {
          ...state.userData,
          userName: userRegisterDataFromServer.user.name,
          profileImage: userRegisterDataFromServer.user.image,
          isLogged: true,
        },
        error: null,
        loading: false,
      };

    case usersActionTypes.LOGIN_SUCCESS:
      const { userLoginDataFromServer } = action.payload;
      handleAuthResposeFromServer(userLoginDataFromServer);
      return {
        ...state,
        userData: {
          ...state.userData,
          userName: userLoginDataFromServer.user.name,
          profileImage: userLoginDataFromServer.user.image,
          isLogged: true,
        },
        error: null,
        loading: false,
      };

    case usersActionTypes.LOGOUT:
      handleLogout();
      return {
        ...state,
        userData: {
          ...state.userData,
          userName: "",
          profileImage: "",
          isLogged: false,
        },
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;
