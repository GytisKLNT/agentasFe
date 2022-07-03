import React from "react";
import UserPlayerCard from "./UserPlayerCard";

export default {
  title: "UserPlayerCard",
  component: UserPlayerCard,
};

export const Primary = () => (
  <UserPlayerCard
    id={1}
    city="Šiauliai"
    position="C"
    timestamp="2022-07-03"
  ></UserPlayerCard>
);
