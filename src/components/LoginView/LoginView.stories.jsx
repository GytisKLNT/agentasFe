import React from "react";
import { BrowserRouter } from "react-router-dom";
import LoginView from "./LoginView";

export default {
  title: "Views/LoginView",
  component: LoginView,
};

export const Primary = () => (
  <BrowserRouter>
    <LoginView />
  </BrowserRouter>
);
