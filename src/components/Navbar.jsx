import React, { useEffect, useState } from "react";
import Large from "./Navbar/Large";
import Small from "./Navbar/Small";
import { useAuth } from "../context/AuthenticateUser";

const Navbar = () => {
  const auth = useAuth();
  const [user, setUser] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    setUser(auth.user);
    setBalance(auth.balance);
  }, [auth]);

  return (
    <>
      <div id="navbar" className="px-3  bg2 shadow-lg">
        <Large balance={balance} user={user}></Large>
        <Small balance={balance} user={user}></Small>
      </div>
    </>
  );
};

export default Navbar;
