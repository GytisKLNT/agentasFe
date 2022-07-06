import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import * as S from "./RegisterForm.styles";
import TextInput from "../TextInput/TextInput";

const RegisterForm = ({ children, handleSubmit }) => {
  const [registerValues, updateRegisterValues] = useState();

  return (
    <S.Container>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmit(registerValues);
        }}
      >
        <S.BackArrow to="/">←</S.BackArrow>
        <h2>Sign Up</h2>
        <TextInput
          type="email"
          isRequired
          placeholder="info@example.com"
          handleChange={(emailValue) =>
            updateRegisterValues({ ...registerValues, email: emailValue })
          }
        />
        <TextInput
          type="password"
          isRequired
          placeholder="Password"
          handleChange={(passwordValue) =>
            updateRegisterValues({ ...registerValues, password: passwordValue })
          }
        />
        <S.FlexContainer>
          <Button type="submit">Sign Up</Button>
        </S.FlexContainer>
        {children}
      </S.Form>
    </S.Container>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default RegisterForm;
