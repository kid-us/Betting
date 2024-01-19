import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthenticateUser";
import request from "../constant/request";
import axios from "axios";
const RequireAuth = ({ children }) => {
  const auth = useAuth();

  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwNTY1MTgzNiwianRpIjoiYjhkMDhlMzctMTc0Mi00MTNmLWJmNzItNzg2OWY0YTY0NDlmIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtpZHVzaGgyOUBnbWFpbC5jb20iLCJuYmYiOjE3MDU2NTE4MzYsImV4cCI6MTcwNTkxMTAzNn0.HfU5zEYtgKqe6x-PDjJo1F0qz5MlVGdHtQLxHmNH78c";

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
