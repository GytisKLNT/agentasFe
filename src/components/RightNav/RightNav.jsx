import React from "react";
import PropTypes from "prop-types";
import * as S from "./RightNav.styles";

const RightNav = ({ open, children }) => {
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
      {children}
    </S.List>
  );
};

RightNav.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
};

export default RightNav;
