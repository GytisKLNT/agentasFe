import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Players from "./pages/Players";
import Register from "./pages/Register";
import Teams from "./pages/Teams";
import AddTeam from "./pages/AddTeam";
import AddPlayer from "./pages/AddPlayer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/home"
          element={
            localStorage.getItem("token") ? <Home /> : <Navigate to="/" />
          }
        />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/players"
          element={
            localStorage.getItem("token") ? <Players /> : <Navigate to="/" />
          }
        />
        <Route
          exact
          path="/teams"
          element={
            localStorage.getItem("token") ? <Teams /> : <Navigate to="/" />
          }
        />
        <Route
          exact
          path="/addteams"
          element={
            localStorage.getItem("token") ? <AddTeam /> : <Navigate to="/" />
          }
        />
        <Route
          exact
          path="/addplayers"
          element={
            localStorage.getItem("token") ? <AddPlayer /> : <Navigate to="/" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
