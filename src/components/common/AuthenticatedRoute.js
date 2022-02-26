import React from "react";
import { Navigate } from "react-router-dom";
import CheckAuth from "./logic/CheckAuth";

export default function AuthenticatedRoute({ children }) {
  const authed = CheckAuth();

  return authed ? children : <Navigate to={"/login"} />;
}
