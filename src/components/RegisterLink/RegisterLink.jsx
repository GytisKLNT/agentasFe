import React from "react";
import PropTypes from "prop-types";
import * as S from "./RegisterLink.styles";

const RegisterLink = ({ children }) => {
  return (
    <S.RegisterLink to="/">
      {children} <S.Span>Sign Up</S.Span>
    </S.RegisterLink>
  );
};

RegisterLink.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RegisterLink;
