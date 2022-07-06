import React from "react";
import HomeHeroLinks from "./HomeHeroLinks";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "HomeHeroLinks",
  component: HomeHeroLinks,
};

export const Primary = () => (
  <BrowserRouter>
    <HomeHeroLinks
      toOne="/players"
      textOne="Text"
      toTwo="/teams"
      textTwo="Text"
    />
  </BrowserRouter>
);
