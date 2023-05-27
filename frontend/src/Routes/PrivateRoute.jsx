import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { authData } = useSelector((store) => store.auth);
  const { pathname } = useLocation();

  if (authData.token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" state={{ from: pathname }} replace />;
  }
};

export default PrivateRoute;
