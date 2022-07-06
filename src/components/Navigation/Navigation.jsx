import React from "react";
import * as S from "./Navigation.styles";
import Burger from "../Burger/Burger";

import logo from "../../assets/logo.png";

const Navigation = (props) => {
  return (
    <S.Header>
      <S.Logo src={logo} alt="logo" />
      <nav>
        <Burger />
      </nav>
    </S.Header>
  );
};

export default Navigation;
