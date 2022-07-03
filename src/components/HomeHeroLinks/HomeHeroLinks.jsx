import React from "react";
import PropTypes from "prop-types";
import * as S from "./HomeHeroLinks.styles";

const HomeHeroLinks = ({ toOne, textOne, toTwo, textTwo }) => {
  return (
    <S.LinksContainer>
      <S.HeroLink to={toOne}>{textOne}</S.HeroLink>
      <S.HeroLink to={toTwo}>{textTwo}</S.HeroLink>
    </S.LinksContainer>
  );
};

HomeHeroLinks.propTypes = {
  toOne: PropTypes.string.isRequired,
  textOne: PropTypes.string.isRequired,
  toTwo: PropTypes.string.isRequired,
  textTwo: PropTypes.string.isRequired,
};

export default HomeHeroLinks;
