import React from "react";
import PropTypes from "prop-types";
import * as S from "./UserTeamCard.styles";
import DeleteButton from "../DeleteButton/DeleteButton";

const UserTeamCard = ({
  id,
  team_name,
  city,
  league,
  position,
  timestamp,
  className,
}) => {
  return (
    <S.Card className={className}>
      <S.List>
        <li>Komanda: {team_name}</li>
        <li>Miestas: {city}</li>
        <li>Lyga: {league}</li>
        <li>Ieškoma pozicija: {position}</li>
      </S.List>
      <div>
        <p>Skelbimas sukurtas: {timestamp}</p>
        <DeleteButton type="button" handleClick={() => console.log({ id })} />
      </div>
    </S.Card>
  );
};

UserTeamCard.propTypes = {
  id: PropTypes.number.isRequired,
  team_name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default UserTeamCard;
