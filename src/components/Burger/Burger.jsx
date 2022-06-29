import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Burger.styles";
import RightNav from "../RightNav/RightNav";

const Burger = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </S.StyledBurger>
      <RightNav open={open} />
    </>
  );
};

Burger.propTypes = {};

export default Burger;
