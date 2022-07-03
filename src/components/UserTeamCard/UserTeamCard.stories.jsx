import React from "react";
import UserTeamCard from "./UserTeamCard";

export default {
  title: "UserTeamCard",
  component: UserTeamCard,
};

export const Primary = () => (
  <UserTeamCard
    id={1}
    team_name="Team Name"
    city="Šiauliai"
    league="SMKL"
    position="C"
    timestamp="2022-07-03"
  ></UserTeamCard>
);
