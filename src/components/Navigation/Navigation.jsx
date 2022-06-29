import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo.png";
import * as S from "./Navigation.styles";
import Burger from "../Burger/Burger";

const Navigation = (props) => {
  return (
    <S.Header>
      <S.Logo>LOGO</S.Logo>
      <nav>
        <Burger />
      </nav>
    </S.Header>
  );
};

Navigation.propTypes = {};

export default Navigation;
