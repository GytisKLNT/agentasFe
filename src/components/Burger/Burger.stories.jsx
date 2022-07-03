import React from "react";
import Burger from "./Burger";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Burger",
  component: Burger,
};

export const Primary = () => (
  <BrowserRouter>
    <Burger />
  </BrowserRouter>
);
