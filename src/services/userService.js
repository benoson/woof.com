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
