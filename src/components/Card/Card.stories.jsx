import React from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const Primary = () => (
  <Card
    team_name="Team Name"
    city="Šiauliai"
    league="SMKL"
    position="C"
    phone="861221221"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    timestamp="2022-07-03"
  ></Card>
);
