import React from "react";
import Hero from "../Hero/Hero";
import LoginForm from "../LoginForm/LoginForm";
import * as S from "./LoginView.styles";

const LoginView = () => {
  return (
    <S.Container>
      <Hero title="Basketball Agent" subtitle="Find your Team or Teammate" />
      <LoginForm />
    </S.Container>
  );
};

export default LoginView;
