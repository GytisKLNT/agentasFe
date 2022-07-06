import React from "react";
import PropTypes from "prop-types";
import * as S from "./TextArea.styles";

const TextArea = ({ id, placeholder, value, handleChange }) => {
  return (
    <S.TextArea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
