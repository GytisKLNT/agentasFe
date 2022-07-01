import React from "react";
import TextInput from "./TextInput";

export default {
  title: "TextInput",
  component: TextInput,
};

export const Primary = () => (
  <TextInput
    label="Email"
    type="email"
    placeholder="info@example.com"
    handleChange={(inputValue) => console.log(inputValue)}
  />
);
