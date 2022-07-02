import React from "react";
import PropTypes from "prop-types";
import * as S from "./PlayerCardList.styles";

const PlayerCardList = ({ players }) => {
  return (
    <S.CardList>
      {players &&
        players.map((player) => (
          <S.CardItem
            key={player.id}
            name={player.name}
            city={player.city}
            last_name={player.last_name}
            position={player.position}
            phone={player.phone}
            description={player.description}
            timestamp={player.timestamp}
          />
        ))}
    </S.CardList>
  );
};

PlayerCardList.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      last_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PlayerCardList;
