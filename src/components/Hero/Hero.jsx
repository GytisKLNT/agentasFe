import React from "react";
import PropTypes from "prop-types";
import * as S from "./Hero.styles";

const Hero = ({ title, subtitle }) => {
  return (
    <S.Hero>
      <S.Title>{title}</S.Title>
      <h2>{subtitle}</h2>
    </S.Hero>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
