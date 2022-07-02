import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardList.styles";

const CardList = ({ teams }) => {
  return (
    <S.CardList>
      {teams &&
        teams.map((team) => (
          <S.CardItem
            key={team.id}
            team_name={team.team_name}
            city={team.city}
            league={team.league}
            position={team.position}
            phone={team.phone}
            description={team.description}
            timestamp={team.timestamp}
          />
        ))}
    </S.CardList>
  );
};

CardList.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      team_name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      league: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardList;
