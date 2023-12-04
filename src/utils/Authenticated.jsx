import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

const Authenticated = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();

  if (sessionStorage.getItem("token")) {
    return <Navigate to={location.pathname} />;
  }

  return children;
};

export default Authenticated;
