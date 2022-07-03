import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.styles";

const Card = ({
  team_name,
  city,
  league,
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
        <li>Komanda: {team_name}</li>
        <li>Miestas: {city}</li>
        <li>Lyga: {league}</li>
        <li>Ieškoma pozicija: {position}</li>
        <li>Telefonas: {phone}</li>
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

Card.propTypes = {
  team_name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
};

export default Card;
