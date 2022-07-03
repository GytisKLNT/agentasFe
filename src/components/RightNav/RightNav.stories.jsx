import React from "react";
import RightNav from "./RightNav";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "RightNav",
  component: RightNav,
};

export const Primary = () => (
  <BrowserRouter>
    <RightNav />
  </BrowserRouter>
);
