import axios from "axios";
import * as config from "../config";

const serverUrl = config.serverConfig.serverUrl;

export const getFeedData = async () => {
  try {
    const feedData = await axios.get(`${serverUrl}/posts`);
    return feedData;
  } catch (error) {
    console.error("Error fetching feed data:", error);
  }
};
