import React from "react";
import TeamForm from "./TeamForm";

export default {
  title: "TeamForm",
  component: TeamForm,
};

export const Primary = () => (
  <TeamForm handleSubmit={(values) => console.log(values)} />
);
