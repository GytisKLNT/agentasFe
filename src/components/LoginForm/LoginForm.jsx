import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import * as S from "./LoginForm.styles";
import RegisterLink from "../RegisterLink/RegisterLink";
import TextInput from "../TextInput/TextInput";

const LoginForm = ({ children, handleSubmit }) => {
  const [loginValues, updateLoginValues] = useState();

  return (
    <S.Container>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmit(loginValues);
        }}
      >
        <h2>Sign In</h2>
        <TextInput
          type="email"
          placeholder="info@example.com"
          id="email"
          handleChange={(emailValue) =>
            updateLoginValues({ ...loginValues, email: emailValue })
          }
        />
        <TextInput
          type="password"
          placeholder="Password"
          id="password"
          handleChange={(passwordValue) =>
            updateLoginValues({ ...loginValues, password: passwordValue })
          }
        />
        <S.FlexContainer>
          <S.Link>Forgot Password?</S.Link>
          <Button type="submit">Sign In</Button>
        </S.FlexContainer>

        {children}

        <RegisterLink>Don't have an account?</RegisterLink>
      </S.Form>
    </S.Container>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default LoginForm;
