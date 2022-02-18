import axios from "axios";
import * as config from "../config";

const serverUrl = config.serverConfig.serverUrl;

export const getFeedData = async () => {
  try {
    return await axios.get(`${serverUrl}/posts`);
  } catch (error) {
    console.error("Error fetching feed data:", error);
  }
};

export const addPost = async ({ title, image }) => {
  try {
    return await axios.post(`${serverUrl}/posts`);
  } catch (error) {
    console.error("Error posting new post:", error);
  }
};
