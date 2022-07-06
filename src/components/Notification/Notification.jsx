import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.styles";

const Notification = ({ children, color }) => {
  const danger = {
    background: "#ff8383",
  };
  const success = {
    background: "#83ffc3",
  };

  return (
    <>
      {color === "danger" && (
        <S.Notification style={(color = danger)}>{children}</S.Notification>
      )}

      {color === "success" && (
        <S.Notification style={(color = success)}>{children}</S.Notification>
      )}
    </>
  );
};

Notification.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "danger"]),
};

export default Notification;
