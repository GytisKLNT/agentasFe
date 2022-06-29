import React from "react";
import PropTypes from "prop-types";
import * as S from "./RightNav.styles";

const RightNav = ({ open }) => {
  return (
    <S.List open={open}>
      <li>Home</li>
      <li>Teams</li>
      <li>Players</li>
    </S.List>
  );
};

RightNav.propTypes = {};

export default RightNav;
