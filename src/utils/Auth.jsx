import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [balance, setBalance] = useState();

  // useEffect(() => {
  //   // if (localStorage.getItem("token")) {
  //   //   setToken(sessionStorage.getItem("token"));
  //   // } else {
  //   //   setToken(null);
  //   // }
  // }, [token]);

  const logout = () => {
    // sessionStorage.removeItem("token");
    window.location.href = "https://maverickhabesha.com/login.html";
    setUser(null);
    setBalance(null);
  };

  const logged = (data) => {
    setUser(data.data.username);
    setBalance(data.balance);
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
