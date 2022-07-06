import React from "react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

export default {
  title: "LoginForm",
  component: LoginForm,
};

export const Primary = () => (
  <BrowserRouter>
    <LoginForm handleSubmit={(values) => console.log(values)} />
  </BrowserRouter>
);
