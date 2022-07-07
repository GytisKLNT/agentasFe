import React from "react";
import PropTypes from "prop-types";
import * as S from "./UserPlayerCard.styles";
import DeleteButton from "../DeleteButton/DeleteButton";

const UserPlayerCard = ({ items, handleDelete }) => {
  return (
    <>
      {items &&
        items.map((item) => (
          <S.Card className={item.className} key={item.id}>
            <S.List>
              <li>
                <S.Span>Miestas: </S.Span>
                {item.city}
              </li>
              <li>
                <S.Span>Pozicija: </S.Span>
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
                  handleDelete(item.id);
                }}
              />
            </div>
          </S.Card>
        ))}
    </>
  );
};

UserPlayerCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default UserPlayerCard;
