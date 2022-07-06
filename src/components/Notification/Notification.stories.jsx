import React from "react";
import Notification from "./Notification";

export default {
  title: "Notification",
  component: Notification,
};

export const Danger = () => (
  <Notification color="danger">Notification Text</Notification>
);
export const Success = () => (
  <Notification color="success">Notification Text</Notification>
);
