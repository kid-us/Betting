import React, { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthenticateUser";
import RequireAuth from "./context/RequireAuth";
import Betting from "./components/Betting";
import MyBets from "./components/MyBets";
import { Route, Routes } from "react-router-dom";
import "animate.css";
function App() {
  return (
    <>
      <AuthProvider>
        <RequireAuth>
          <Routes>
            <Route path="/" exact element={<Betting></Betting>}></Route>
            <Route
              path="/sports/:key"
              exact
              element={<Betting></Betting>}
            ></Route>

            <Route
              path="/sports/:key/:id"
              exact
              element={<Betting></Betting>}
            ></Route>

            <Route path="/slips"></Route>

            <Route
              path="sports/my-bets"
              exact
              element={<MyBets></MyBets>}
            ></Route>
          </Routes>
        </RequireAuth>
      </AuthProvider>
    </>
  );
}

export default App;
