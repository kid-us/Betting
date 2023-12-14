import React, { useEffect, useState } from "react";
import { useAuth } from "./Auth";
import request from "../constant/request";
import axios from "axios";
const RequireAuth = ({ children }) => {
  const auth = useAuth();

  const key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoiZTQ5N2MwODQtZTJjMy00ZGU3LThiNDMtNWU1MjMyOWYxNjNjIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtpZHVzaGgyOUBnbWFpbC5jb20iLCJuYmYiOjE3MDIyMDcwNTcsImV4cCI6MTcwMjQ2NjI1N30.cxwNCp8-Z6W0q2qvLqigdEUVp0C69wPCw1mDN374-cU";
  useEffect(() => {
    axios
      .get(request.getCurrentUser, {
        headers: { Authorization: `Bearer ${key}` },
      })
      .then(function (response) {
        auth.logged(response.data);
      })
      .catch(function (error) {
        window.location.href = "https://maverickhabesha.com/login.html";
      });
  }, []);

  if (!key) {
    window.location.href = "https://maverickhabesha.com/login.html";
  }

  return children;
};

export default RequireAuth;
