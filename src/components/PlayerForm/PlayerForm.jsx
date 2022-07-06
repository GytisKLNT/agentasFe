import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import * as S from "./PlayerForm.styles";
import TextInput from "../TextInput/TextInput";
import Select from "../Select/Select";
import TextArea from "../TextArea/TextArea";
import Section from "../Section/Section";

const PlayerForm = ({ children, handleSubmit }) => {
  const options = ["PG", "SG", "SF", "PF", "C"];

  const [teamValues, updateTeamValues] = useState();

  return (
    <Section>
      <S.PlayerForm
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmit(teamValues);
        }}
      >
        <h2>Pridėk žaidėjo skelbimą</h2>
        <TextInput
          type="text"
          placeholder="Vardas"
          id="name"
          handleChange={(nameValue) =>
            updateTeamValues({ ...teamValues, name: nameValue })
          }
        />
        <TextInput
          type="text"
          placeholder="Pavardė"
          id="lastName"
          handleChange={(lastNameValue) =>
            updateTeamValues({ ...teamValues, lastName: lastNameValue })
          }
        />

        <TextInput
          type="text"
          placeholder="Miestas"
          id="city"
          handleChange={(cityValue) =>
            updateTeamValues({ ...teamValues, city: cityValue })
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

        <TextArea
          id="description"
          placeholder="Trumpas prisistatymas"
          handleChange={(descriptionValue) =>
            updateTeamValues({ ...teamValues, description: descriptionValue })
          }
        />

        <Button type="submit">Pridėti</Button>

        {children}
      </S.PlayerForm>
    </Section>
  );
};

PlayerForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default PlayerForm;
