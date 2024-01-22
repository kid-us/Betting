import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthenticateUser";
import request from "../constant/request";
import axios from "axios";
const RequireAuth = ({ children }) => {
  const auth = useAuth();

  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwNTkyMzk5NywianRpIjoiN2QzNjFmYTMtZTEyMS00NmI4LWFjZGEtNmRlNDA2Y2VhYzAyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtpZHVzaGgyOUBnbWFpbC5jb20iLCJuYmYiOjE3MDU5MjM5OTcsImV4cCI6MTcwNjE4MzE5N30.IxIahAAlR4jkpHxehMjyBxjGF3hQitaD92Wm_x4KD_c";

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
