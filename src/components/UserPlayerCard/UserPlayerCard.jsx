import React from "react";
import PropTypes from "prop-types";
import * as S from "./UserPlayerCard.styles";
import DeleteButton from "../DeleteButton/DeleteButton";

const UserPlayerCard = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item) => (
          <S.Card className={item.className} key={item.id}>
            <S.List>
              <li>Miestas: {item.city}</li>
              <li>Pozicija: {item.position}</li>
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

UserPlayerCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserPlayerCard;
