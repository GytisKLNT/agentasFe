import React from "react";
import * as S from "./Navigation.styles";
import PropTypes from "prop-types";
import Burger from "../Burger/Burger";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Navigation = ({ children }) => {
  return (
    <S.Header>
      
        <Burger />
      
      <Link to="/home">
        <S.Logo src={logo} alt="logo" />
      </Link>
      {children}


    </S.Header>
  );
};

Navigation.propTypes = {
  children: PropTypes.node,
};

export default Navigation;
