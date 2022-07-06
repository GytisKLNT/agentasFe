import React from "react";
import PropTypes from "prop-types";
import * as S from "./Select.styles";

const Select = ({ id, options, handleChange }) => {
  return (
    <S.Select id={id} onChange={(e) => handleChange(e.target.value)}>
      {options &&
        options.map((option) => <option key={option}>{option}</option>)}
    </S.Select>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
