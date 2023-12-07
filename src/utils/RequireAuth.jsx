import React, { useEffect, useState } from "react";
import { useAuth } from "./Auth";
import request from "../constant/request";
import axios from "axios";
const RequireAuth = ({ children }) => {
  const auth = useAuth();

  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMTkzNjc0MSwianRpIjoiNWE1ZGJjYTUtOTAxOS00ZTlmLWEwNTctOGI2NTFhOTU3NmE3IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtpZHVzaGgyOUBnbWFpbC5jb20iLCJuYmYiOjE3MDE5MzY3NDEsImV4cCI6MTcwMjE5NTk0MX0.H_GhoGJ8pux93yywDrJrfoBmcr2JznNWpJXjfB95Lto";

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
