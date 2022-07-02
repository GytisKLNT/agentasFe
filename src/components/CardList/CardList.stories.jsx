import React from "react";
import CardList from "./CardList";

export default {
  title: "CardList",
  component: CardList,
};

const teams = [
  {
    team_name: "Team Name",
    city: "Šiauliai",
    league: "SMKL",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    team_name: "Team Name",
    city: "Šiauliai",
    league: "SMKL",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    team_name: "Team Name",
    city: "Šiauliai",
    league: "SMKL",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    team_name: "Team Name",
    city: "Šiauliai",
    league: "SMKL",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    team_name: "Team Name",
    city: "Šiauliai",
    league: "SMKL",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    team_name: "Team Name",
    city: "Šiauliai",
    league: "SMKL",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    team_name: "Team Name",
    city: "Šiauliai",
    league: "SMKL",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    team_name: "Team Name",
    city: "Šiauliai",
    league: "SMKL",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
];

export const Primary = () => <CardList teams={teams} />;
