import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as S from "./UserTeamCard.styles";
import DeleteButton from "../DeleteButton/DeleteButton";

const UserTeamCard = ({ items, handleDelete }) => {
  const [itemDelete, setItemDelete] = useState();

  useEffect(() => {
    handleDelete(itemDelete);
  }, [handleDelete, itemDelete]);

  return (
    <>
      {items &&
        items.map((item) => (
          <S.Card key={item.id}>
            <S.List>
              <li>
                <S.Span>Komanda: </S.Span>
                {item.team_name}
              </li>
              <li>
                <S.Span>Miestas: </S.Span>
                {item.city}
              </li>
              <li>
                <S.Span>Lyga: </S.Span>
                {item.league}
              </li>
              <li>
                <S.Span>Ieškoma pozicija: </S.Span>
                {item.position}
              </li>
            </S.List>
            <div>
              <p>
                <S.Span>Skelbimas sukurtas: </S.Span>
                {new Date(item.timestamp).getFullYear()}-
                {(new Date(item.timestamp).getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}
                -
                {new Date(item.timestamp).getDate().toString().padStart(2, "0")}
              </p>
              <DeleteButton
                type="button"
                handleClick={() => {
                  setItemDelete(item.id);
                }}
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
  handleDelete: PropTypes.func.isRequired,
};

export default UserTeamCard;
