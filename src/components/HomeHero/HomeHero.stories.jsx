import React from "react";
import HomeHero from "./HomeHero";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "HomeHero",
  component: HomeHero,
};

export const Primary = () => (
  <BrowserRouter>
    <HomeHero title="Title" subtitle="subtitle" />
  </BrowserRouter>
);
