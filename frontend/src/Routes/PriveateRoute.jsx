import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  // const { pathname } = useLocation();
  const token = true;

  // state={{ from: pathname }} replace
  
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login"  />;
  }
};

export default PrivateRoute;
