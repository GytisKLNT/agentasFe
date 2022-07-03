import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Players from "./pages/Players";
import Register from "./pages/Register";
import Teams from "./pages/Teams";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/players" element={<Players />} />
        <Route exact path="/teams" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
