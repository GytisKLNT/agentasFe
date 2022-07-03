import React from "react";
import PropTypes from "prop-types";
import * as S from "./DeleteButton.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({ type, handleClick }) => {
  return (
    <S.DeleteButton type={type} onClick={handleClick}>
      <FontAwesomeIcon icon={faTrashCan} />
    </S.DeleteButton>
  );
};

DeleteButton.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  handleClick: PropTypes.func,
};

DeleteButton.defaultProps = {
  type: "button",
};

export default DeleteButton;
