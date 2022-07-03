import React from "react";
import PropTypes from "prop-types";
import * as S from "./HomeHero.styles";
import Section from "../Section/Section";

const HomeHero = ({ title, subtitle, children }) => {
  return (
    <S.HomeHero>
      <Section>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        {children}
      </Section>
    </S.HomeHero>
  );
};

HomeHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default HomeHero;
