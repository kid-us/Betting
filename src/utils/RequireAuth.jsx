import React, { useEffect, useState } from "react";
import { useAuth } from "./Auth";
import request from "../constant/request";
import axios from "axios";
const RequireAuth = ({ children }) => {
  const auth = useAuth();

  const key ="U";
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
