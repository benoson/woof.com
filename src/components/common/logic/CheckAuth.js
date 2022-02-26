import axios from "axios";

const CheckAuth = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.token;

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return true;
  }
  return false;
};

export default CheckAuth;
