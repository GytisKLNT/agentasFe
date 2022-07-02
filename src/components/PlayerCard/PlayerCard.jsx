import React from "react";
import PropTypes from "prop-types";
import * as S from "./PlayerCard.styles";

const PlayerCard = ({
  name,
  last_name,
  city,
  position,
  phone,
  description,
  timestamp,
  className,
}) => {
  return (
    <S.Card className={className}>
      <S.List>
        <li>
          Vardas Pavardė: {name} {last_name}
        </li>
        <li>Miestas: {city}</li>
        <li>Ieškoma pozicija: {position}</li>
        <li>Telefonas: {phone}</li>
      </S.List>

      <S.Description>{description}</S.Description>
      <span>Skelbimas sukurtas: {timestamp}</span>
    </S.Card>
  );
};

PlayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PlayerCard;
