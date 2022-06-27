import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import * as S from "./LoginForm.styles";
import RegisterLink from "../RegisterLink/RegisterLink";

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
        <h2>Sign In</h2>
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
          placeholder="Password"
          handleChange={(passwordValue) =>
            updateLoginValues({ ...loginValues, password: passwordValue })
          }
        />
        <S.FlexContainer>
          <S.Link>Forgot Password?</S.Link>
          <Button type="submit">Sign In</Button>
        </S.FlexContainer>

        <RegisterLink>Don't have an account?</RegisterLink>
      </S.Form>
    </>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
