import React from "react";
import PlayerForm from "./PlayerForm";

export default {
  title: "PlayerForm",
  component: PlayerForm,
};

export const Primary = () => (
  <PlayerForm handleSubmit={(values) => console.log(values)} />
);
