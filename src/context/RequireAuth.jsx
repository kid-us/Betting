import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthenticateUser";
import request from "../constant/request";
import axios from "axios";
const RequireAuth = ({ children }) => {
  const auth = useAuth();

  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwNjAwMjY5MSwianRpIjoiMjI5MjUxMjktYzRiYi00ZjljLTk2MzUtNmYzMjg4ODA3ZDFiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtpZHVzaGgyOUBnbWFpbC5jb20iLCJuYmYiOjE3MDYwMDI2OTEsImV4cCI6MTcwNjI2MTg5MX0.R0C2BhgWQ6pbinvLdH9bPfoR6-MRP8hbc7bgVFT-3W4";

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
