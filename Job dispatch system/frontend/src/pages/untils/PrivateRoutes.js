import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = (props) => {
  const auth = localStorage.getItem("user");
  return auth == null ? <Navigate to="/login" /> : props.children;
};

export default PrivateRoutes;
