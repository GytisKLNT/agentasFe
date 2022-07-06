import React from "react";
import PropTypes from "prop-types";
import * as S from "./Select.styles";

const Select = ({ id, options, handleChange }) => {
  return (
    <S.Select id={id} required onChange={(e) => handleChange(e.target.value)}>
      <option selected disabled>
        Pozicija
      </option>
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
