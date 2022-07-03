import React from "react";
import PropTypes from "prop-types";
import * as S from "./UserTeamCard.styles";
import DeleteButton from "../DeleteButton/DeleteButton";

const UserTeamCard = ({ items, className }) => {
  return (
    <>
      {items &&
        items.map((item) => (
          <S.Card className={className} key={item.id}>
            <S.List>
              <li>Komanda: {item.team_name}</li>
              <li>Miestas: {item.city}</li>
              <li>Lyga: {item.league}</li>
              <li>Ieškoma pozicija: {item.position}</li>
            </S.List>
            <div>
              <p>
                Skelbimas sukurtas: {new Date(item.timestamp).getFullYear()}-
                {(new Date(item.timestamp).getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}
                -
                {new Date(item.timestamp).getDate().toString().padStart(2, "0")}
              </p>
              <DeleteButton
                type="button"
                handleClick={() => console.log(item.id)}
              />
            </div>
          </S.Card>
        ))}
    </>
  );
};

UserTeamCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      team_name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      league: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserTeamCard;
