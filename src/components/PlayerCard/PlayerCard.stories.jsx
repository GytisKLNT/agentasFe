import React from "react";
import PlayerCard from "./PlayerCard";

export default {
  title: "PlayerCard",
  component: PlayerCard,
};

export const Primary = () => (
  <PlayerCard
    name="Name"
    city="Šiauliai"
    last_name="Lastname"
    position="C"
    phone="861221221"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    timestamp="2022-07-03"
  ></PlayerCard>
);
