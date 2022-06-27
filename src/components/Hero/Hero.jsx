import React from "react";
import PropTypes from "prop-types";
import * as S from "./Hero.styles";
import logo from "../../assets/logo.png";

const Hero = ({ title, subtitle }) => {
  return (
    <S.Hero>
      <S.Logo src={logo} alt="Logo" />
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Hero>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
