import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./utils/Auth";
import RequireAuth from "./utils/RequireAuth";
import Betting from "./components/Betting";
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

            {/* <Route
              path="sports/home"
              exact
              element={<Betting></Betting>}
            ></Route> */}
          </Routes>
      
        </RequireAuth>
      </AuthProvider>
    </>
  );
}

export default App;
