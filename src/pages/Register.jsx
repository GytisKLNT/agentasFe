import React from "react";
import Container from "../components/Container/Container";
import Hero from "../components/Hero/Hero";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <Container>
      <Hero title="Basketball Agent" subtitle="Find your Team or Teammate" />
      <RegisterForm handleSubmit={(values) => console.log(values)} />
    </Container>
  );
};

export default Register;
