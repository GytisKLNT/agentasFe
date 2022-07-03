import React from "react";
import PropTypes from "prop-types";
import * as S from "./RightNav.styles";
import { Link } from "react-router-dom";

const RightNav = ({ open, links }) => {
  return (
    <S.List open={open}>
      <li>
        <S.Pages to="/home">HOME</S.Pages>
      </li>
      <li>
        <S.Pages to="/players">PLAYERS</S.Pages>
      </li>
      <li>
        <S.Pages to="/teams">TEAMS</S.Pages>
      </li>
    </S.List>
  );
};

RightNav.propTypes = {};

export default RightNav;
