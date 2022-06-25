import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import * as S from "./RegisterForm.styles";

const RegisterForm = ({ handleSubmit }) => {
  const [registerValues, updateRegisterValues] = useState();

  return (
    <>
      <S.RegisterForm
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmit(registerValues);
        }}
      >
        <S.Textinput
          type="email"
          label="Email"
          placeholder="info@example.com"
          handleChange={(emailValue) =>
            updateRegisterValues({ ...registerValues, email: emailValue })
          }
        />
        <S.Textinput
          type="password"
          label="Password"
          placeholder="password"
          handleChange={(passwordValue) =>
            updateRegisterValues({ ...registerValues, password: passwordValue })
          }
        />
        <Button type="submit">Login</Button>
      </S.RegisterForm>
    </>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
