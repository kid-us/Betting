import React, { useEffect, useState } from "react";
import { useAuth } from "./Auth";
import request from "../constant/request";
import axios from "axios";
const RequireAuth = ({ children }) => {
  const auth = useAuth();

  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMTYwOTc4MiwianRpIjoiMDRmM2FlOTUtYmJkMy00Yzk4LTk2M2EtNmUyYWEwYjY5YTllIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtpZHVzaGgyOUBnbWFpbC5jb20iLCJuYmYiOjE3MDE2MDk3ODIsImV4cCI6MTcwMTg2ODk4Mn0.f5axB9WnGnyZRAY8yW-Yo7EaxP035TWdGdDGp6mTkSo";

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
