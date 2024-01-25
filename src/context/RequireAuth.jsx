import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthenticateUser";
import request from "../constant/request";
import axios from "axios";
const RequireAuth = ({ children }) => {
  const auth = useAuth();

  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwNjE4NTMzOSwianRpIjoiY2FlYmVlMTctYTFlOC00NDFiLTk4YmQtNmQwODUxY2U2MzgwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtpZHVzaGgyOUBnbWFpbC5jb20iLCJuYmYiOjE3MDYxODUzMzksImV4cCI6MTcwNjQ0NDUzOX0.Tz2OuffLRc_S0C7kifw_1S3Hai058tsYkZPwmkXrdG4";

  localStorage.setItem("access_token", key);

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
