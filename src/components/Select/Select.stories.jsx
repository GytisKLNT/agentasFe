import React from "react";
import Select from "./Select";

export default {
  title: "Select",
  component: Select,
};

const options = ["PG", "SG", "SF", "PF", "C"];

export const Primary = () => (
  <Select
    options={options}
    label="Email"
    placeholder="info@example.com"
    handleChange={(inputValue) => console.log(inputValue)}
  />
);
