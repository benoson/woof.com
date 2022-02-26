import axios from "axios";

export const handleAuthResposeFromServer = (userData) => {
  const jsonUserData = JSON.stringify(userData);
  localStorage.setItem("userData", jsonUserData);

  axios.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
};

export const handleLogout = () => {
  localStorage.removeItem("userData");
};
