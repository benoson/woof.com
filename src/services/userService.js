import axios from "axios";
import * as config from "../config";

const serverUrl = config.serverConfig.serverUrl;

export const register = async (
  userName,
  profileImage,
  password,
  confirmPassword
) => {
  try {
    const registerRes = await axios.post(`${serverUrl}/users`, {
      userName,
      profileImage,
      password,
      confirmPassword,
    });

    return registerRes.data;
  } catch (error) {
    console.error("Error trying to register:", error);
  }
};

export const login = async (userName, password) => {
  try {
    const loginRes = await axios.post(`${serverUrl}/users/login`, {
      userName,
      password,
    });

    return loginRes.data;
  } catch (error) {
    console.error("Error trying to login:", error);
  }
};

export const getUsersSearchResults = async (searchTerm) => {
  try {
    const searchRes = await axios.get(
      `${serverUrl}/users/search/${searchTerm}`
    );
    return searchRes.data;
  } catch (error) {
    console.error("Error trying to get search results:", error);
  }
};

export const addFriend = async (friendName) => {
  try {
    const addFriendRes = await axios.post(
      `${serverUrl}/users/add-friend/${friendName}`
    );
    return addFriendRes.data;
  } catch (error) {
    console.error("Error trying to add friend:", error);
  }
};

export const getUserProfileData = async (userName) => {
  try {
    const userProfileData = await axios.get(
      `${serverUrl}/users/profile-data/${userName}`
    );
    return userProfileData.data;
  } catch (error) {
    console.error("Error trying to get user profile data:", error);
  }
};

export const getUserData = async () => {
  try {
    const userData = await axios.get(`${serverUrl}/users/user`);
    return userData.data;
  } catch (error) {
    console.error("Error trying to get user data:", error);
  }
};
