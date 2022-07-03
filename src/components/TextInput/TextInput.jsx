import React from "react";
import PropTypes from "prop-types";
import * as S from "./TextInput.styles";

const TextInput = ({ id, type, placeholder, value, handleChange }) => {
  return (
    <S.Textinput
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password"]),
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
