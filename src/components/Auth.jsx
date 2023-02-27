import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router";

function Auth(props) {
  const isAuthenicated = localStorage.getItem("isLoggedIn");

  return isAuthenicated ? props.children : <Navigate to="/login" replace />;
}

export default Auth;
