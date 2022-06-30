import React from "react";
import Container from "../components/Container/Container";
import Hero from "../components/Hero/Hero";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <Container>
      <Hero title="Basketball Agent" subtitle="Find your Team or Teammate" />
      <LoginForm handleSubmit={(values) => console.log(values)} />
    </Container>
  );
};

export default Login;
