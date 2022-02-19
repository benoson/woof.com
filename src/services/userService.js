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
    return await axios.post(`${serverUrl}/users`, {
      userName,
      profileImage,
      password,
      confirmPassword,
    });
  } catch (error) {
    console.error("Error trying to register:", error);
  }
};
