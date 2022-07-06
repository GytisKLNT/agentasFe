import React from "react";
import UserPlayerCard from "./UserPlayerCard";

export default {
  title: "UserPlayerCard",
  component: UserPlayerCard,
};

const items = [
  {
    id: 1,
    city: "Šiauliai",
    position: "C",
    timestamp: "2022-07-03",
  },
];

export const Primary = () => (
  <UserPlayerCard items={items} handleDelete={() => console.log("delete")} />
);
