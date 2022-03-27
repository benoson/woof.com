import axios from "axios";
import * as config from "../config";

const serverUrl = config.serverConfig.serverUrl;

export const updatePreferences = async (
  generalBackground,
  buttonBackground
) => {
  try {
    const preferencesRes = await axios.patch(`${serverUrl}/preferences`, {
      generalBackground,
      buttonBackground,
    });

    return preferencesRes.data;
  } catch (error) {
    console.error("Error trying to update preferences:", error);
  }
};
