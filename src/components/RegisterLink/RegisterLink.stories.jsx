import React from "react";
import RegisterLink from "./RegisterLink";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "RegisterLink",
  component: RegisterLink,
};

export const Primary = () => (
  <BrowserRouter>
    <RegisterLink>Dont have an account?</RegisterLink>
  </BrowserRouter>
);
