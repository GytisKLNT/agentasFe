import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import * as S from "./TeamForm.styles";
import TextInput from "../TextInput/TextInput";
import Select from "../Select/Select";
import TextArea from "../TextArea/TextArea";
import Section from "../Section/Section";

const TeamForm = ({ children, handleSubmit }) => {
  const options = ["PG", "SG", "SF", "PF", "C"];

  const [teamValues, updateTeamValues] = useState();

  return (
    <Section>
      <S.TeamForm
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmit(teamValues);
        }}
      >
        <h2>Pridėk komandos skelbimą</h2>
        <TextInput
          type="text"
          placeholder="Miestas"
          id="city"
          handleChange={(cityValue) =>
            updateTeamValues({ ...teamValues, city: cityValue })
          }
        />
        <TextInput
          type="text"
          placeholder="Lyga"
          id="league"
          handleChange={(leagueValue) =>
            updateTeamValues({ ...teamValues, league: leagueValue })
          }
        />

        <Select
          id="psition"
          options={options}
          handleChange={(positionValue) =>
            updateTeamValues({ ...teamValues, position: positionValue })
          }
        />

        <TextInput
          type="text"
          placeholder="Tel. Nr."
          id="phone"
          handleChange={(phoneValue) =>
            updateTeamValues({ ...teamValues, phone: phoneValue })
          }
        />

        <TextInput
          type="text"
          placeholder="Komandos Pav."
          id="team"
          handleChange={(teamValue) =>
            updateTeamValues({ ...teamValues, teamName: teamValue })
          }
        />

        <TextArea
          id="description"
          placeholder="Trumpas prisistatymas"
          handleChange={(descriptionValue) =>
            updateTeamValues({ ...teamValues, description: descriptionValue })
          }
        />

        <Button type="submit">Pridėti</Button>

        {children}
      </S.TeamForm>
    </Section>
  );
};

TeamForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default TeamForm;
