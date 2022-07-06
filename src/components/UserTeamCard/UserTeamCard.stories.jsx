import React from "react";
import UserTeamCard from "./UserTeamCard";

export default {
  title: "UserTeamCard",
  component: UserTeamCard,
};

const items = [
  {
    id: 1,
    team_name: "Team Name",
    city: "Šiauliai",
    league: "SMKL",
    position: "C",
    timestamp: "2022-07-03",
  },
];

export const Primary = () => (
  <UserTeamCard items={items} handleDelete={() => console.log("delete")} />
);
