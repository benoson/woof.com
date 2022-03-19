import usersActionTypes from "../actionTypes/usersActionTypes";
import {
  handleAuthResposeFromServer,
  handleLogout,
} from "../../components/common/logic/HandleAuth";

const defaultState = {
  userData: {
    userName: JSON.parse(localStorage.getItem("userData"))?.user?.name,
    profileImage: JSON.parse(localStorage.getItem("userData"))?.user?.image,
    isLogged: JSON.parse(localStorage.getItem("userData"))?.token,
    friends: [],
  },
  preferences: {
    background: JSON.parse(localStorage.getItem("preferences")?.background),
    button: JSON.parse(localStorage.getItem("preferences")?.button),
    postBackground: JSON.parse(
      localStorage.getItem("preferences")?.postBackground
    ),
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
          friends: userRegisterDataFromServer.user.friends,
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
          friends: userLoginDataFromServer.user.friends,
          isLogged: true,
        },
        error: null,
        loading: false,
      };

    case usersActionTypes.LOGIN_FAIL:
      const error = action.payload;
      return {
        ...state,
        error,
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

    case usersActionTypes.ADD_FRIEND_SUCCESS:
      const { friend } = action.payload;
      const friendsUpdated = state.userData.friends;
      friendsUpdated.push(friend);

      return {
        ...state,
        error: null,
        loading: false,
        userData: {
          ...state.userData,
          friends: friendsUpdated,
        },
      };

    case usersActionTypes.USER_DATA_SUCCESS:
      const { userData } = action.payload;
      return {
        ...state,
        error: null,
        loading: false,
        userData: {
          ...state.userData,
          friends: userData.friends,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
