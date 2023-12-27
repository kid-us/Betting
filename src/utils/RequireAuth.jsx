import React, { useEffect, useState } from "react";
import { useAuth } from "./Auth";
import request from "../constant/request";
import axios from "axios";
const RequireAuth = ({ children }) => {
  const auth = useAuth();

  const key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMzcwODQ2NiwianRpIjoiYjE3NTQ2MmEtNzcxZi00MDc2LWIwMjItMzA0NWNhZDIwYzBhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtpZHVzaGgyOUBnbWFpbC5jb20iLCJuYmYiOjE3MDM3MDg0NjYsImV4cCI6MTcwMzk2NzY2Nn0.6Ch4Qsc-7h8TaTZijByVESfInpTQKHHpt8Z7wut2oVo"
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
