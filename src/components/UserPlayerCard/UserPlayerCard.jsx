import React from "react";
import PropTypes from "prop-types";
import * as S from "./UserPlayerCard.styles";
import DeleteButton from "../DeleteButton/DeleteButton";

const UserPlayerCard = ({ id, city, position, timestamp, className }) => {
  return (
    <S.Card className={className}>
      <S.List>
        <li>Miestas: {city}</li>
        <li>Pozicija: {position}</li>
      </S.List>
      <div>
        <p>Skelbimas sukurtas: {timestamp}</p>
        <DeleteButton type="button" handleClick={() => console.log({ id })} />
      </div>
    </S.Card>
  );
};

UserPlayerCard.propTypes = {
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default UserPlayerCard;
