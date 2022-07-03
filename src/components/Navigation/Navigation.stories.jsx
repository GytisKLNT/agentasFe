import React from "react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Navigation",
  component: Navigation,
};

export const Primary = () => (
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
);
