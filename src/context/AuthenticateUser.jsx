import { useState, createContext, useContext, useEffect } from "react";
// import axios from "axios";
// import request from "../constant/request";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const initialToken = localStorage.getItem("token");
  // const [token, setToken] = useState(initialToken || "");
  const [user, setUser] = useState();
  const [balance, setBalance] = useState();

  // useEffect(() => {
  //   if (token) {
  //     axios
  //       .get(request.getCurrentUser, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then(function (response) {
  //         setUser(response.data.data.username);
  //         setBalance(response.data.balance);
  //       })
  //       .catch(function (error) {
  //         window.location.href = "https://maverickhabesha.com/login.html";
  //       });
  //   } else {
  //     window.location.href = "https://maverickhabesha.com/login.html";
  //   }
  // }, [initialToken]);

  const logged = (data) => {
    setUser(data.data.username);
    setBalance(data.balance);
  };

  const logout = () => {
    // localStorage.removeItem("token");
    // window.location.href = "https://maverickhabesha.com/login.html";
    setUser(null);
    setBalance(null);
  };

  return (
    <AuthContext.Provider value={{ balance, user, logged, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
