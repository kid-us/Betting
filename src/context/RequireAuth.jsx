import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthenticateUser";
import request from "../constant/request";
import axios from "axios";
const RequireAuth = ({ children }) => {
  const auth = useAuth();

  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwNjI5MjM4NCwianRpIjoiYTY3ZTc1M2QtYTJkNS00N2JhLThkMmEtNmUzMmRlNDU1NWVhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtpZHVzaGgyOUBnbWFpbC5jb20iLCJuYmYiOjE3MDYyOTIzODQsImV4cCI6MTcwNjU1MTU4NH0._0vr_FCR9qr-ZoKkP8Fm3aQXg9qbL_4pvuNg3q76mkY";

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
