import React from "react";
import PlayerCardList from "./PlayerCardList";

export default {
  title: "PlayerCardList",
  component: PlayerCardList,
};

const players = [
  {
    id: 1,
    name: "Name",
    city: "Šiauliai",
    last_name: "Lastname",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    id: 2,
    name: "Name",
    city: "Šiauliai",
    last_name: "Lastname",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    timestamp: "2022-07-03",
  },
  {
    id: 3,
    name: "Name",
    city: "Šiauliai",
    last_name: "Lastname",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    id: 4,
    name: "Name",
    city: "Šiauliai",
    last_name: "Lastname",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    id: 5,
    name: "Name",
    city: "Šiauliai",
    last_name: "Lastname",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    id: 6,
    name: "Name",
    city: "Šiauliai",
    last_name: "Lastname",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    id: 7,
    name: "Name",
    city: "Šiauliai",
    last_name: "Lastname",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    id: 8,
    name: "Name",
    city: "Šiauliai",
    last_name: "Lastname",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    id: 9,
    name: "Name",
    city: "Šiauliai",
    last_name: "Lastname",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
  {
    id: 10,
    name: "Name",
    city: "Šiauliai",
    last_name: "Lastname",
    position: "C",
    phone: "861221221",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    timestamp: "2022-07-03",
  },
];

export const Primary = () => <PlayerCardList players={players} />;
