import React from "react";
import Hero from "../Hero/Hero";
import LoginForm from "../LoginForm/LoginForm";
import Container from "../Container/Container";

const LoginView = () => {
  return (
    <Container>
      <Hero title="Basketball Agent" subtitle="Find your Team or Teammate" />
      <LoginForm handleSubmit={(values) => console.log(values)} />
    </Container>
  );
};

export default LoginView;
