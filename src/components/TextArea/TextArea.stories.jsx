import React from "react";
import TextArea from "./TextArea";

export default {
  title: "TextArea",
  component: TextArea,
};

export const Primary = () => (
  <TextArea
    type="description"
    placeholder="Trumpas prisistatymas"
    handleChange={(inputValue) => console.log(inputValue)}
  />
);
