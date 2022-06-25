import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import * as S from "./LoginForm.styles";

const LoginForm = ({ handleSubmit }) => {
  const [loginValues, updateLoginValues] = useState();

  return (
    <>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmit(loginValues);
        }}
      >
        <S.Textinput
          type="email"
          label="Email"
          placeholder="info@example.com"
          handleChange={(emailValue) =>
            updateLoginValues({ ...loginValues, email: emailValue })
          }
        />
        <S.Textinput
          type="password"
          label="Password"
          placeholder="password"
          handleChange={(passwordValue) =>
            updateLoginValues({ ...loginValues, password: passwordValue })
          }
        />
        <Button type="submit">Login</Button>
      </S.Form>
    </>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
