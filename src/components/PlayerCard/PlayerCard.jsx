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
  const date = new Date(timestamp);

  return (
    <S.Card className={className}>
      <S.List>
        <li>
          <S.Span>Vardas Pavardė: </S.Span>
          {name} {last_name}
        </li>
        <li>
          <S.Span>Miestas: </S.Span>
          {city}
        </li>
        <li>
          <S.Span>Pozicija: </S.Span>
          {position}
        </li>
        <li>
          <S.Span>Telefonas: </S.Span>
          {phone}
        </li>
      </S.List>

      <S.Description>{description}</S.Description>
      <span>
        Skelbimas sukurtas: {date.getFullYear()}-
        {(date.getMonth() + 1).toString().padStart(2, "0")}-
        {date.getDate().toString().padStart(2, "0")}
      </span>
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
