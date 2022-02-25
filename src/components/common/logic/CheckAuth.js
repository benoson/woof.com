import React from "react";
import { useDispatch } from "react-redux";
import usersActionTypes from "../../../redux/actionTypes/usersActionTypes";

const CheckAuth = () => {
  const dispatch = useDispatch();
  const token = JSON.parse(sessionStorage.getItem("token"));

  if (token) {
    dispatch({ type: usersActionTypes.AUTH_CHECK, payload: true });
    return;
  }

  dispatch({ type: usersActionTypes.AUTH_CHECK, payload: false });

  return <div></div>;
};

export default CheckAuth;
