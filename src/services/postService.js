import axios from "axios";
import * as config from "../config";

const serverUrl = config.serverConfig.serverUrl;

export const getFeedData = async () => {
  return await axios.get(`${serverUrl}/posts`);
};

export const addPost = async (title, image, tags) => {
  try {
    return await axios.post(`${serverUrl}/posts`, { title, image, tags });
  } catch (error) {
    console.error("Error posting new post:", error);
  }
};

export const updatePost = async (postId, data) => {
  try {
    return await axios.patch(`${serverUrl}/posts/${postId}`, { data });
  } catch (error) {
    console.error(`Error updating post ${postId}:`, error);
  }
};
